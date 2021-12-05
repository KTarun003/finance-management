import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './App.css'
import './main.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Link and Script tags for Bootstrap
const script = document.createElement("script");
const link = document.createElement("link");
const fontAwesome = document.createElement("link");


link.crossOrigin = "anonymous";
link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
link.rel = "stylesheet";
link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";

fontAwesome.crossOrigin = "anonymous";
fontAwesome.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
fontAwesome.rel = "stylesheet";
fontAwesome.integrity = "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p";

script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
script.crossOrigin = "anonymous";

document.head.appendChild(link);
document.body.appendChild(script);

// Now we can render our application into it
render(<App />, document.getElementById('root'))
