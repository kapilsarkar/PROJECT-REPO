import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, storage, db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Browse = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("🔐 Auth state changed:", currentUser?.uid || "No user");
      setUser(currentUser);
      if (currentUser) {
        await fetchProfileImage(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fetch user's saved profile image
  const fetchProfileImage = async (currentUser) => {
    if (!currentUser?.uid) {
      console.warn("⚠️ Tried to fetch image but user is null or undefined");
      return;
    }

    try {
      console.log("📡 Fetching Firestore doc for:", currentUser.uid);
      const docRef = doc(db, "users", currentUser.uid);
      const userDoc = await getDoc(docRef);
      if (userDoc.exists()) {
        const data = userDoc.data();
        console.log("✅ Firestore user data:", data);
        if (data.profileImage) setProfileImage(data.profileImage);
      } else {
        console.log("ℹ️ No Firestore document found for this user yet.");
      }
    } catch (error) {
      console.error("🔥 Error fetching image from Firestore:", error);
    }
  };

  // ✅ Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!user?.uid) {
      alert("User not authenticated!");
      return;
    }

    setUploading(true);
    try {
      const imageRef = ref(storage, `profileImages/${user.uid}/${Date.now()}-${file.name}`);
      console.log("⬆️ Uploading file:", file.name);
      await uploadBytes(imageRef, file);

      const downloadURL = await getDownloadURL(imageRef);
      console.log("📸 Image uploaded. URL:", downloadURL);

      await setDoc(
        doc(db, "users", user.uid),
        { profileImage: downloadURL },
        { merge: true }
      );

      setProfileImage(downloadURL);
      alert("✅ Profile picture uploaded successfully!");
    } catch (error) {
      console.error("❌ Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Handle logout
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("🚪 Logout failed:", error.message);
    }
  };

  // ✅ Loading state while Firebase initializes
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 text-white">
        <p className="text-lg animate-pulse">Loading user data...</p>
      </div>
    );
  }

  // ✅ No user logged in
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 text-white">
        <p className="mb-4 text-lg">No user signed in.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // ✅ Main UI
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 flex flex-col items-center justify-center text-white px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md text-center">
        
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={profileImage || "https://via.placeholder.com/150?text=No+Image"}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-md"
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0 bg-yellow-400 text-blue-900 rounded-full p-2 cursor-pointer shadow-md hover:bg-yellow-300 transition"
              title="Upload Image"
            >
              📷
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          {uploading && <p className="text-yellow-400 mt-2 text-sm">Uploading...</p>}
        </div>

        {/* Welcome Section */}
        <h1 className="text-3xl font-bold mb-2">
          Welcome, <span className="text-yellow-400">{user.displayName || "User"}</span> 👋
        </h1>
        <p className="text-white/80 mb-6 text-sm md:text-base">
          Manage your account and view your profile details.
        </p>

        {/* User Info */}
        <div className="bg-white/10 rounded-xl p-4 mb-6 text-sm md:text-base">
          <p className="mb-2">
            <span className="font-semibold text-yellow-400">📧 Email:</span>{" "}
            {user.email || "Not available"}
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogOut}
          className="bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-400 hover:shadow-yellow-400/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
