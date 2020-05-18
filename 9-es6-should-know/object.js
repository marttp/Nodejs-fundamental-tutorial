/**
 * Object Destructuring
 */
const post = {
  userId: 1,
  id: 6,
  title: 'dolorem eum magni eos aperiam quia',
  body: 'ut aspernatur corporis harum nihil quis provident sequi',
};

// ใช้ในกรณีของแยก field จาก object
const { title } = post;
console.log(`Title: ${title}`);

// ใช้ในกรณีรับฟิลด์ เท่าที่จะใช้
const sendNotificationToSubscriber = ({ userId, title }) => {
    console.log(`userId ${userId} has post new blog "${title}"`);
}
sendNotificationToSubscriber(post)
