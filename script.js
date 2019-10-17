/* -------- CODING PART WITH DOM INSTRUCTIONS --------------------------------------------------------------------*/

// Calculating the number of messages 
var messagesCount = document.getElementsByTagName('p').length

// updating the counter (with id='count')
document.getElementById('count').textContent = messagesCount


// For each paragraph 'p'
for (var i = 0; i < document.getElementsByTagName('p').length; i++) {

    // 1) Listening for the click on a trash
      
    document.getElementsByClassName('trash')[i].addEventListener("click",     function() { 

        // 2) deleting the parent of the trash --> the entire Row 
           
        this.parentNode.remove();

        // 3)- Updating the count again

        // We need the acquisition of the messages numbers again
        messagesCount = document.getElementsByTagName('p').length

        // updating counter once more
        document.getElementById('count').textContent = messagesCount   
    }  );
};

// signal button add

// 1) Listening for the click on the button add 
  
document.getElementById('btn-add').addEventListener("click",
    function() {    
        messageForm = document.getElementById('add-message').value;

        //création de la div
        var divRow = document.createElement('div');
        divRow.className = "row";
        document.body.appendChild(divRow);

        //création de l'avatar
        var imgAvatar = document.createElement('img');
        imgAvatar.className = "avatar";
        imgAvatar.src = "avatar-5.jpg";
        divRow.appendChild(imgAvatar);

        //création de la div content
        var divContent = document.createElement('div');
        divContent.className = "content";
        divRow.appendChild(divContent);

        //création de h6
        var baliseH6 = document.createElement('h6');
        baliseH6.textContent = "Eric Chapier";
        divContent.appendChild(baliseH6);

        //création de p
        var p = document.createElement('p');
        divContent.appendChild(p);
        var newText = document.createTextNode(messageForm);
        p.appendChild(newText);

        //création de img
        var imgTrash = document.createElement('img');
        imgTrash.className = "trash";
        imgTrash.src = "trash.png";
        divRow.appendChild(imgTrash);


        // We need the acquisition of the messages numbers again
        messagesCount = document.getElementsByTagName('p').length;

        // updating counter once more
        document.getElementById('count').textContent = messagesCount;

        //ciblez le form pour le réactualiser
        document.getElementById('add-message').value = " ";  

        // supprimer l'élément poubelle
         
        document.getElementsByClassName('trash')[i].addEventListener("click",     
            function() { 
                this.parentNode.remove();
            })
    }  
);

/* -------------------------------------------------------------------------------------------------------*/