class MyHeader extends HTMLElement {
	connectedCallback(){
		this.innerHTML = 
		'
			<header>
   		 <a href="index.html">
   		   <img src="./images/mathnoteslogo.png" alt="MathNotesのロゴ">
  		  </a>
 			 </header> 
		'	 
	}
}
customElements.define('my-header', MyHeader)