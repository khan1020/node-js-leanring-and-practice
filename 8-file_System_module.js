// File Reading

// fileRead Asynced
// fileRead Asynced
// fileRead Asynced
const fs = require("fs")

function aboutAfzal(){

     fs.readFile("contents/fsTest.txt","utf8", (err,data)=>{
        if (err) {
            console.log(err);
            return
            
        }
        console.log("Async File Read Afzal\n\n"+data);
        
    })
    
}
aboutAfzal()
// FileReadSync
// FileReadSync
// FileReadSync

function aboutAfzalSync(){

     fs.readFileSync("contents/AfzalTasleem.txt","utf8", (err,data)=>{
        if (err) {
            console.log(err);
            // return
            
        }
        console.log("Sync File Read Afzal\n\n"+data);
        
    })
    
}
aboutAfzalSync()


// File Writing
// File Writing
// File Writing
// File Writing



// File write Asynced
// File write Asynced
content =  fs.readFileSync("contents/snapshot.txt")

function wFile() {
    try{

        fs.writeFile("contents/snapshot written.txt", "this is Async"+content+"\n\n\n",	()=>('a+')	)
        console.log("async writting successfully\n  ")
    }catch(error){

        console.log(error)
    }
  
    
    
}

wFile()


// file Write Synced
// file Write Synced
// file Write Synced


content2 =  fs.readFileSync("contents/snapshot.txt", "utf-8")

function wFileSync() {
    try{

        fs.writeFileSync("contents/AfzalTasleem.txt", "this is Sync"+content2+"\n\n\n",	{	flag:	'a+'	})
        console.log("this is sync File writting successfully\n ")

        }catch(error){
    
            console.log(err)        
        
    }
    
}

wFileSync()


/*

 The	flags	you'll	likely	use	are
	r+		open	the	file	for	reading	and	writing
	w+		open	the	file	for	reading	and	writing,	positioning	the	stream	at	the	beginning	of	the
 file.	The	file	is	created	if	not	existing
	a		open	the	file	for	writing,	positioning	the	stream	at	the	end	of	the	file.	The	file	is	created
 if	not	existing
 

    a+		open	the	file	for	reading	and	writing,	positioning	the	stream	at	the	end	of	the	file.	The
 file	is	created	if	not	existing
 
*/
