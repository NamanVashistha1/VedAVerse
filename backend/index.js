const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
app.use(cors());
// const express = require('express')
const { mongoDB } = require('./db');
// const app = express()
// const port = 5000
app.use(express.json());
const mongo =  mongoDB();



//OpenAI api config
const config = new Configuration({
    apiKey: " ",
});

const openai = new OpenAIApi(config);

//Chatbot endpoint
app.post("/gpt", async (req, res) => {
    //const prompt="Write a c code for armstrong number"
    const { prompt } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
    });
    res.send(response.data.choices[0].text);
    //console.log(response.data);

})



function isEqual(obj1, obj2) {
    // Implement your comparison logic here
    // This is a placeholder function, customize it as needed
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

app.post('/db', async (req, res) => {
    // console.log(req.body);
    try {
      const symp = req.body.prompt;
      console.log(req.body.prompt);
      const mongo = await mongoDB();
        // console.log(mongo);
        console.log(typeof(symp));

      mongo.forEach((mongo1) => {
        if (isEqual(symp, mongo1.Symptom)) {
        //   console.log(mongo1.Allopathic_Medicine);
        //   console.log(mongo1.Ayurvedic_Cure);
        //   return mongo1;
        return res.json({ mongo1 });
        // res.json(mongo1);

        }
        if (isEqual(symp, mongo1.Allopathic_Medicine)) {
            // console.log(mongo1.Allopathic_Medicine);
            // console.log(mongo1.Symptom);
            // console.log(mongo1.Ayurvedic_Cure);
            return res.json({ mongo1 });
        }
      });
  
      // Send a response here if needed
    //   res.status(200).json({ message: 'Comparison complete' });
    } catch (error) {
      console.error('Error in /db route', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




const Tesseract = require('tesseract.js');

const port = 8000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Serve your React app (assuming it's built and in a 'build' directory)
app.use(express.static(path.join(__dirname, 'build')));

// Handle file upload
app.post('/upload', upload.single('uploadFile'), async(req, res) => {
  if (req.file) {
    // File uploaded successfully
    // console.log( req.file.path);
    const mongo = await mongoDB();
    // console.log(mongo);

    // res.json({ filePath: req.file.path });
    const imagePath = req.file.path;
    Tesseract.recognize(
        imagePath,
        'eng', // Language (English in this case)
        { logger: (info) => console.log(info) } // Optional logger function
        )
        .then(({ data: { text } }) => {
            // console.log('Extracted text:');
            // console.log(text);
            // Split the text into lines
          const lines = text.split('\n');

          // Initialize an array to store the first words
          const firstWords = [];

          // Loop through each line and extract the first word
          lines.forEach((line) => {
            const words = line.split(' ');
            if (words.length > 0) {
              const firstWord = words[0];
              firstWords.push(firstWord);
            }
          });
          console.log(firstWords);
          for (const firstWord of firstWords) {
             for(const word of mongo) {
                if(firstWord==word.Allopathic_Medicine){
                  // console.log("yes");
                   return res.json({ word });

                }

          }}
          // Now, firstWords array contains the first words from each line
          // console.log(firstWords);
          // forEach(firstWords)
          //   if (isEqual(firstWords, mongo.Allopathic_Medicine)) {
          //     // console.log(mongo1.Allopathic_Medicine);
          //     // console.log(mongo1.Symptom);
          //     // console.log(mongo1.Ayurvedic_Cure);
          //     return res.json({ mongo });
          // }
          // mongo.forEach((mongo) => {
          // for (const firstWord of firstWords) {
          //   console.log(firstWord);
          //   // console.log(typeof(firstWord));
          //   if (isEqual(firstWord, mongo.Allopathic_Medicine)) {
          //     // You found a match, break the loop and return mongo
          //     // alert('Yes');
          //     return res.json({ mongo });
          //   }
          // }});
          // Assuming 'mongo' is an array of objects
          // console.log(firstWords);
          // console.log(mongo);
// if (Array.isArray(mongo)) {
//   mongo.forEach((mongoItem) => {
//     for (const firstWord of firstWords) {
//       // console.log(firstWord);
//       if (isEqual(firstWord, mongoItem.Allopathic_Medicine)) {
//         // You found a match, break the loop and return 'mongoItem'
//         // alert('Yes');
//         // console,log("YES");
//         return res.json({ mongo: mongoItem });
//       }
//     }
//   });
// } else {
//   // Handle the case when 'mongo' is not an array
//   console.error('mongo is not an array');
//   // You can send an appropriate response or perform other actions here
// }
        
          
        })
        .catch((error) => {
            console.error('Error extracting text:', error);
        });
    // res.json({ filePath: req.file.path });


  } else {
    // No file selected
    res.status(400).json({ error: 'No file selected' });
  }
});





//DB usable
app.use("/api", require("./Routes/createUser"));

app.use("/api", require("./Routes/getAlternates"));

// app.use("/api", require("./Routes/getSurveys"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

