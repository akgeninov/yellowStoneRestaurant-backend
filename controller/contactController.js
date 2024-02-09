const contacts = require('../model/contactModel');

const addContact = async (req, res) => {
    const { body } = req;
    try {
        const contact = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }
  
        await contacts.create(contact);
  
        res.status(201).send({ 
            msg: "Add Contact Success",
            data: body 
        });
  
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage : error
          })
        }
      }


// function backFillContacts(req, res, next){
//     contacts.bulkCreate([{
//         name: "A",
//         email: "a@gmail.com",
//         subject: "aaaaaaaaaaaaaaa",
//         message: "a.good"
//     },
//     {
//         name: "B",
//         email: "b@gmail.com",
//         subject: "bbbbbbbbbbbbbbbb",
//         message: "b.good"
//     },
//     {
//         name: "C",
//         email: "C@gmail.com",
//         subject: "cccccccccccccccc",
//         message: "c.good"
//     }])
//     .then(() => res.json({message: "Succesfully backfilled in"}))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({
//             error: err
//         })
//     });
// }

function getContacts(req, res, next){
    contacts.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get contacts: ${err.message}`
        })
    })
}

// GET ALL MESSAGE
// const getMessage = async (req, res) => {
//     try {
//         const Message = await ContactUs.findAll()

//         res.json({
//             message: 'Get Messages Success',
//             data: Message // Mengirim data artikel sebagai respons
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage : error
//         })
//     }
// }

module.exports = {getContacts, addContact}



