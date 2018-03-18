console.log(this);

function a(){
    console.log(this);
}

var b = function(){
    console.log(this);
}

a();
b();


var c = {    
    name: 'the c object',
    log: function() {
        var self = this;
        
        self.name = 'updated C object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname; // <--- 'this' points to the global object :( fuck you js
        }
        setname('updated again, the c object');
        console.log(self); 
    }    
}

c.log();
console.log(this); // <-- affected in setname