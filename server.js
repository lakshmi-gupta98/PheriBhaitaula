require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
// const session = require('express-session');
const ejs=require('ejs');


const PORT=process.env.PORT;
const db = knex({
    client: 'pg',
    connection: {
        host: 'flora.db.elephantsql.com', // Extract host from the URL
        user: 'dyvmkmkl', // Extract user from the URL
        password: '0xq-G7Bj1VSxjONoIrHNe0MEQXPECzHj', // Extract password from the URL
        database: 'dyvmkmkl' // Extract database name from the URL
    }
});

const app = express();

let intialPath = path.join(__dirname, "public");
app.set('views', intialPath);
app.set('view engine', 'ejs');
// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // Set this to true in a production environment with HTTPS
// }));
// app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(express.static(intialPath));

// const isAuthenticated = require('./authenticationMiddleware');


app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})





app.get('/publish', (req, res) => {
    res.sendFile(path.join(intialPath, "publish.html"));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(intialPath, "about.html"));
})
app.get('/c-poem1', (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem1.html"));
})
app.get('/c-poem2',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem2.html"));
})
app.get('/c-poem3',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem3.html"));
})
app.get('/c-poem4',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem4.html"));
})
app.get('/c-poem5',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem5.html"));
})
app.get('/c-poem6',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem6.html"));
})
app.get('/c-poem7',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem7.html"));
})
app.get('/c-poem8',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem8.html"));
})
app.get('/c-poem9',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem9.html"));
})
app.get('/c-poem10',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem10.html"));
})
app.get('/c-poem11',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem11.html"));
})
app.get('/c-poem12',  (req, res) => {
    res.sendFile(path.join(intialPath, "c-poem12.html"));
})
app.get('/feedback',  (req, res) => {
    res.sendFile(path.join(intialPath, "feedback.html"));
})
app.get('/k-poem1',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem1.html"));
})
app.get('/k-poem2',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem2.html"));
})
app.get('/k-poem3',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem3.html"));
})
app.get('/k-poem4',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem4.html"));
})
app.get('/k-poem5',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem5.html"));
})
app.get('/k-poem6',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem6.html"));
})
app.get('/k-poem7',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem7.html"));
})
app.get('/k-poem8',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem8.html"));
})
app.get('/k-poem9',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem9.html"));
})
app.get('/k-poem10',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem10.html"));
})
app.get('/k-poem11',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem11.html"));
})
app.get('/k-poem12',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem12.html"));
})
app.get('/k-poem13',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem13.html"));
})
app.get('/k-poem14',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem14.html"));
})
app.get('/k-poem15',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem15.html"));
})
app.get('/k-poem16',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem16.html"));
})
app.get('/k-poem17',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem17.html"));
})
app.get('/k-poem18',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem18.html"));
})
app.get('/k-poem19',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem19.html"));
})
app.get('/k-poem20',  (req, res) => {
    res.sendFile(path.join(intialPath, "k-poem20.html"));
})
app.get('/likhawat',  (req, res) => {
    res.sendFile(path.join(intialPath, "likhawat.html"));
})
app.get('/pad',  (req, res) => {
    res.sendFile(path.join(intialPath, "pad.html"));
})





app.get('/admin', (req, res) => {
    db.select('*').from('feedback_data').then(data => {
      console.log(data); // <-- add this line to check if data is being correctly retrieved
      res.render('admin', { feedback: data });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error retrieving feedback data. Please try again later.' });
    });
  });

  app.get('/published', (req, res) => {
    db.select('*').from('publish').then(data => {
      console.log(data); // <-- add this line to check if data is being correctly retrieved
      res.render('published', { feedback: data });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error retrieving feedback data. Please try again later.' });
    });
  });















    // Insert the feedback data into the database
    app.post('/submit-feedback', (req, res) => {
        console.log('Received request:', req.body);
        const { resonatedAuthors, experience, krishnaPoem, suggestions, krishh } = req.body;
      
        // Perform input validation if necessary
      
        // Insert the feedback data into the database
        db("feedback_data").insert({
            
          name: resonatedAuthors,
          essence_rating: experience,
          topics: krishnaPoem,
          suggestions: suggestions,
          return:krishh
        })
        .returning(["name", "essence_rating", "topics", "suggestions", "return"])
        .then(data => {
          res.json(data[0]);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: "Error submitting feedback" });
        });
       
      });
      

      app.post('/submit-publish', (req, res) => {
        console.log('Received request:', req.body);
        const { name,poem } = req.body;
      
        // Perform input validation if necessary
      
        // Insert the feedback data into the database
        db("publish").insert({
            
          name: name,
          stories: poem
        })
        .returning(["name", "stories"])
        .then(data => {
          res.json(data[0]);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: "Error submitting feedback" });
        });
       
      });
      
     
app.listen(PORT, (req, res) => {
    console.log(`listening on PORT ${PORT}.....`);
})