var content = {
    "header": "<header><div class='header-container'> <img src='images/logo.png' alt='School Badge'/><br><div id='heading-container'> <h1> Mzamomtsha Primary School</h1></div><div id='seachbar-container'> <input type='text' placeholder='Search...' name='search'> <button type='submit'><i class='fa fa-search'></i></button></div><div id='navbar-container'> <ul> <li><a href='#home'>HOME</a></li><li><a href='#about'>ABOUT</a></li><li><a href='#events'>EVENTS</a></li></ul> </div></div></header>",
    "footer": "<div class='parent-container'> <div class='contact-details'> <div class='a1'> <h3>Mzamomtsha Primary</h3> </div><div class='b1'> <p><b><u>Contact Details</u></b></p></div><div class='c1'> <i class='fa fa-phone'></i>021 436 3763 </div><div class='d1'> <i class='fa fa-envelope-o'></i> Mzamomtsha@outlook.com </div><div class='e1'> <b><u>Social Media</u></b> </div><div class='f1'> <div class='f11'> <a href='#'><i class='fa fa-facebook'></i></a> </div><div class='f111'> <a href='#'><i class='fa fa-twitter'></i></a> </div><div class='f1111'> <a href='#'><i class='fa fa-instagram'></i></a> </div></div></div><div class='quick'> <p><b>Quick Links</b></p><div class='b2'> <ul class='bb2'> <a href='#'>Donate</a>&nbsp; <a href='#'>About</a>&nbsp; <a href='#'>Gallery</a> </ul> </div></div><div class='contact-us'> <p><b>Contact Us</b></p><div class='a3'> <form action='mailto:you@yourwebsite.com'> <input type='text' placeholder='Email address' class='box' name='email'/><br><textarea id='message' rows='6' cols='22' class='box' placeholder='Message'></textarea><br><button type='submit' class='btn'>Send</button> </form> </div></div></div><div class='footer-end'> <h5>Copyright © Mzamomtsha Primary School 2020</h5> </div>"
};

for (var key in content) {
    document.getElementById(key).innerHTML = content[key];
}