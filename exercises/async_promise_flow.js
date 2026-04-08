// Practical implementation of JavaScript Promise chaining and Async/Await patterns

// 1. Simulating an asynchronous database fetch
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        return reject(new Error("Invalid User ID"));
      }
      resolve({ id: userId, username: "afzal_dev", role: "developer" });
    }, 500);
  });
}

// 2. Fetching user permissions based on role
function fetchUserPermissions(role) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const permissions = role === "developer" 
        ? ["read", "write", "deploy"] 
        : ["read"];
      resolve(permissions);
    }, 400);
  });
}

// 3. Execution using modern async/await with error handling
async function initUserSession(userId) {
  try {
    console.log(`[Info] Initiating session for User ID: ${userId}...`);
    const user = await fetchUser(userId);
    console.log(`[Success] User found: ${user.username}`);

    const permissions = await fetchUserPermissions(user.role);
    console.log(`[Permissions] Granted: ${permissions.join(", ")}`);

    return { sessionStatus: "active", user, permissions };
  } catch (err) {
    console.error(`[Error] Failed to initialize session: ${err.message}`);
    throw err;
  }
}

// Run test
initUserSession(101).then((session) => console.log("[Ready] Session payload:", session));

module.exports = { fetchUser, fetchUserPermissions, initUserSession };
