/* 
(1) Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). The library should be aware of a number of 
shelves. Each shelf should know what books it contains. Make the book object have "enshelf" and "unshelf" methods that control what shelf the book 
is sitting on. The library should have a method to report all books it contains.

I'm a little fuzzy on how to complete this, but I think this code has most of the basics of this program.
*/

	function library (){};
	library.prototype.count= function(){
		return library.length
	};
	var library1= new library();


	function shelf (label){
		shelf.label= label;
	 };

	var shelf1= new shelf('1');
	var shelf2= new shelf('2');
	var shelf3= new shelf('3');

	function book (name){
		book.name= name;
	 };

	book.prototype.enshelf= function(){
	};
	book.prototype.unshelf= function(){
	};

	var book1= new book('The BFG');
	var book2= new book('One Fish, Two Fish, Red Fish, Blue Fish');
	var book3= new book('The Name of the Wind');
	var book4= new book('The Golden Compass');
	var book5= new book('Into Thin Air');
	var book6= new book('The University of Hard Knocks');
	var book7= new book('My Everest Story');
	var book8= new book('The Lord of the Rings');
	var book9= new book('The Wise Mans Fear');