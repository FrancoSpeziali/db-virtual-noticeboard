import Notice from "../models/Notice.js";

export async function getAllNotices(req, res) {
  try {
    const notices = await Notice.find(); // everything in an array

    res.json(notices);
  } catch (error) {
    res.status(500).send("Error processing request");

    console.log(error);
  }
}

export async function addNewNotice(req, res) {
  try {
    const { body } = req;

    // creating a new document in the "Notice" collection
    await Notice.create({
      text: body.text,
      author: body.author,
      date: body.date,
    });

    res.send("New document successfully created!");
  } catch (error) {
    res.status(500).send("Error processing request");

    console.log(error);
  }
}

export async function clearAllNotices(req, res) {
  try {
    await Notice.deleteMany();

    res.send("All notices deleted!");
  } catch (error) {
    res.status(500).send("Error processing request");

    console.log(error);
  }
}
