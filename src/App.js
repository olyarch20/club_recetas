import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "@fortawesome/fontawesome-free/js/all";
import {Header} from "./components/header";
import {Background} from "./components/bg";
import {Recipes} from "./components/section-recipes";
import {About} from "./components/section-about";
import {Contact} from "./components/section-contact";
import {Footer} from "./components/footer";

function App() {

    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

  return (
    <div className="App">
      <Header/>
        <Background/>
        <Recipes/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
