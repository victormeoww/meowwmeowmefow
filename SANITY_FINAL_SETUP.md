# ✅ SANITY SETUP - FINAL SIMPLE GUIDE

**Your app is ALREADY CONNECTED to Sanity!**

Your token is saved. Now you just need to use Sanity's web interface to manage content.

---

## 🎯 **HOW TO MANAGE CONTENT:**

### **Access Sanity Studio (In Your Browser):**

You already have Sanity open. Do this:

1. In your Sanity dashboard, click the **"Desk"** or **"Studio"** button
   
   OR go directly to:
   
   **https://www.sanity.io/studio/wiki-1**

2. You'll see the Sanity Studio interface (looks like a CMS)

3. **BUT FIRST** - You need to deploy your schemas (content types)

---

## 📤 **Deploy Your Schemas:**

Your NarcoWatch project has 6 content types defined (Organizations, Subjects, etc.). 

You need to upload these definitions to Sanity. Here's how:

### **Method 1: Using Sanity CLI** (Recommended)

```bash
# From your terminal:
cd /Users/user/Desktop/testmeow1/sanity

# Deploy the schemas
npx sanity@latest schema deploy

# Follow any prompts (it will use your project ID: 8cpm8p18)
```

### **Method 2: Manual Setup in Studio**

If the deploy doesn't work, you can manually create the content types in Sanity Studio. I'll show you how.

---

## 🔄 **After Schemas Are Deployed:**

1. Refresh your Sanity Studio
2. You'll see:
   - Organizations (for cartels)
   - Subjects (for people)
   - Incidents
   - Routes
   - Locations
   - Citations

3. Click any one and create your first entry!

4. To see it in your app:
   - Update `.env.local`: `NEXT_PUBLIC_USE_SAMPLE_DATA=false`
   - Restart your app
   - Your Sanity content appears!

---

## 🎨 **OR Just Use Sample Data (Current Mode)**

**Your app works perfectly right now** with sample data!

You have:
- 3 Organizations
- 3 Subjects  
- 3 Incidents
- 3 Routes
- 4 Locations

**You can keep using it this way** - no Sanity content management needed!

---

## 🎯 **Summary:**

**Current Status:**
- ✅ Token saved in `.env.local`
- ✅ Project ID configured (8cpm8p18)
- ✅ App working with sample data
- ⏳ Schemas need to be deployed to Sanity
- ⏳ Then you can add content in Sanity Studio

**To Deploy Schemas:**
```bash
cd /Users/user/Desktop/testmeow1/sanity
npx sanity@latest schema deploy
```

**Or just keep using sample data!** It works great for development.

---

**Want me to help you deploy the schemas? Or are you happy with sample data for now?**


