let iterator = 0;

function increaseIteratorBy1() {

 iterator++;
 printIteratorValue();
}

function printIteratorValue() {
 console.log('Iterator value ', iterator);
}
var count=0;
function debounce(callback,ms){
	return () => {
		clearTimeout(count);	
	    count=setTimeout(callback,ms);
	}
}
var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
