const tree = {
    height : "",
    character : "",
    horizontal : 0,
    vertical : 0,
    //This is called to convert the input strings to usable ints
    calcDimensions : function  () {
        this.horizontal = Number(this.height*2 - 1);
        this.vertical = Number(this.height);
    },
    printTree : function () {
        //Bump these back to start at 0 for iterating purposes
        const h_value = (this.horizontal - 1)
        const v_value = (this.vertical - 1)
        //Nested for loop, will print row by row
        for (let i = 0; i < v_value; i++ ){
            
            for (let j = 0; j < h_value; j++){

                if ( (h_value - i) >= h_value || h_value <= (h_value + i)){
                //console.log(this.character)

                //////Will need to populate array and then print one row at a time
                process.stdout.write(this.character);
            }
                else{
                  process.stdout.write("");
                }
            console.log('')
            }
        }
    }   
}   
document.getElementById("grow_button").addEventListener("click",
    function(){
        //Update Tree Object
        tree.height = document.getElementById("height_input").value;
        tree.character = document.getElementById("char_input").value;
        tree.calcDimensions();
        //Print out so I know wtf is going on
        console.log(`Height : ` + tree.height);
        console.log(`Character : ` + tree.character);
        console.log(tree.vertical);
        console.log(tree.horizontal);

});

