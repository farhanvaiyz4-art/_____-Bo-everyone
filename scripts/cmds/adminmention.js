module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "MOHAMMAD AKASH",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["61583610247347", "61588452928616", "61583610247347"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      "Mantion_দিস না _ফারহান বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার বস ফারহান এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "👉আমার বস ♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/DEVIL.FARHAN.420 🔰                                        ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","বস ফারহান কে এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒","বস ফারহান কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","👉আমার বস♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/DEVIL.FARHAN.420 🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","ফারহান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","ফারহান বস কে এতো মেনশন নাহ দিয়া বস কে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে বস ফারহান এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস ফারহান কে মেনশন দিসনা পারলে একটা জি এফ দে","বাল পাকনা Mantion_দিস না বস ফারহান প্রচুর বিজি আছে 🥵🥀🤐","চুমু খাওয়ার বয়স টা আমার বস ফারহান চকলেট🍫খেয়ে উড়িয়ে দিল 🤗"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
