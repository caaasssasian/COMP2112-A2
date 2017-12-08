// let games = [
//     {'publisher' : 'Namco', 'avatar' : 'https://archive.org/services/img/msdos_Pac-Man_1983', 'subject' : 'Pac-Man', 'body' : 'Pac-Man stars a little, yellow dot-muncher who works his way around to clear a maze of the dots.', 'date' : '1983', 'ifrmSrc' : 'https://archive.org/embed/msdos_Pac-Man_1983'},
//     {'publisher' : 'Broderbund', 'avatar' : 'https://archive.org/services/img/msdos_Where_in_the_World_is_Carmen_Sandiego_1985', 'subject' : 'Where in the World is Carmen Sandiego', 'body' : 'Capture the thief that stole the artifact using clues dealing with your knowledge of geography.', 'date' : '1985', 'ifrmSrc' : 'https://archive.org/embed/msdos_Where_in_the_World_is_Carmen_Sandiego_1985'},
//     {'publisher' : 'Ingenuity', 'avatar' : 'https://archive.org/services/img/msdos_Crosscountry_Canada_1991', 'subject' : 'Crosscountry Canada', 'body' : 'Drive an 18-wheel truck picking up and delivering a variety of commodities with typed-in commands.', 'date' : '1991', 'ifrmSrc' : 'https://archive.org/embed/msdos_Crosscountry_Canada_1991'},

// ];

// keeps track of last email that was clicked
// let selectedGame = 0;

// let trash = document.getElementById('trash');
// let inbox = document.getElementById('inbox');
// let compose = document.getElementById('compose');

// trash.addEventListener('click', function(e) {
//     e.preventDefault();
//     let filtered = games.filter( game => game.deleted);
//     selectedGame = 0;
//     render(filtered);
// });

// inbox.addEventListener('click', function(e) {
//     e.preventDefault();
//     let inbox = games.filter( game => !game.deleted);
//     selectedGame = 0;
//     render(inbox);
// });

// compose.addEventListener('click', composeForm);

// function for displaying form when compose button is clicked
// function composeForm(e) {
//     e.preventDefault();
//     let html_composeForm = `
//     <form id="newgame" class="pure-form pure-form-aligned" name="newgame">
//         <fieldset>
//             <div class="pure-control-group">
//                 <label for="subject">Game Title</label>
//                 <input id="subject" type="text" placeholder="Game Title" name="subject">
//                 <span class="pure-form-message-inline">This is a required field.</span>
//             </div>

//             <div class="pure-control-group">
//                 <label for="publisher">Publisher</label>
//                 <input id="publisher" type="text" placeholder="Publisher" name="publisher">
//                 <span class="pure-form-message-inline">This is a required field.</span>
//             </div>

//             <div class="pure-control-group">
//                 <label for="date">Date Published</label>
//                 <input id="date" type="number" placeholder="Date Published" name="date">
//             </div>

//             <div class="pure-control-group">
//                 <label for="body">Description</label>
//                 <textarea id="body" type="text" placeholder="Description" name="body" rows="5" cols="50"></textarea>
//             </div>
            
//             <div class="pure-control-group">
//                 <label for="avatar">Avatar</label>
//                 <input id="avatar" type="text" placeholder="Avatar" name="avatar">
//             </div>

//             <div class="pure-control-group">
//                 <label for="ifrmSrc">iframe URL</label>
//                 <input id="ifrmSrc" type="text" placeholder="iframe URL" name="ifrmSrc">
//             </div>

//             <div class="pure-controls">
//                 <button id="send" type="send" class="pure-button pure-button-primary">Send</button>
//             </div>
//         </fieldset>
//     </form>
//     `;

//     let main = document.getElementById('main');
//     main.innerHTML = html_composeForm;

//     let send = document.getElementById('newgame');
//     send.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         let date = new Date();

//         let obj_newGame = {
//             subject : document.forms.newgame.subject.value,
//             publisher : document.forms.newgame.publisher.value,
//             body : document.forms.newgame.body.value,
//             ifrmSrc : document.forms.newgame.ifrmSrc.value,
//             date : document.forms.newgame.date.value,
//             avatar : document.forms.newgame.avatar.value
//         }
        
//         // push new object above into games array
//         games.unshift(obj_newGame);
        
//         // user localStorage to remember current state
//         setLocalStorage();
        
//         // update the view of inbox 
//         inbox.click();
//     });
// }

// function for rendering games and displaying them 
// function render(emails) {
//     let gameSnippet = `
//         ${games.map( (game, index) => `
//         <div class="email-item pure-g" data-id="${index}">
//             <div class="pure-u">
//                 <img width="64" height="64" alt="game avatar" class="email-avatar" src="${game.avatar}">
//             </div>
        
//             <div class="pure-u-3-4">
//                 <h5 class="email-name">${game.publisher}</h5>
//                 <h4 class="email-subject">${game.subject}</h4>
//                 <p class="email-desc">${game.body.length > 100 ? game.body.substr(0,99) + '...' : game.body}</p>
//             </div>
//         </div>
//         `).join('')}
//     `;
    
//     let gameColumn = document.getElementById('list');
//     gameColumn.innerHTML = gameSnippet;
    
//     // calling the "initialize(games)" function 
//     initialize(games);
// }

// function for initializing games and highlighting the selected game
// function initialize(games) {
//     let gameList = [...(document.querySelectorAll('[data-id]'))];
//     gameList.map( (game, index) => game.addEventListener('click', function(e) {
//         gameList[selectedGame].classList.remove('email-item-selected');
//         game.classList.add('email-item-selected');
//         selectedGame = index;
//         showGameBody(index, games);
//     }));

//     if (games.length) {
//         gameList[selectedGame].classList.add('email-item-selected');
//         showGameBody(selectedGame, games);
//     }
//     else {
//         let main = document.getElementById('main');
//         main.innerHTML = '<h1>No Email</h1>';
//     }
// }

// function for viewing the body of game
// function showGameBody(idx, games) {
//     let displayGameBody = `
//     <div class="email-content">
//         <div class="email-content-header pure-g">
//             <div class="pure-u-1-2">
//                 <h1 class="email-content-title">${games[idx].subject}</h1>
//                 <p class="email-content-subtitle">
//                     From <a>${games[idx].publisher}</a> in <span>${games[idx].date}</span>
//                 </p>
//             </div>

//             <div class="email-content-controls pure-u-1-2">
//                 <button id="delete" class="secondary-button pure-button" data-id="${idx}">${games[idx].deleted ? 'Deleted' : 'Delete'}</button>
//                 <button class="secondary-button pure-button">Forward</button>
//                 <button class="secondary-button pure-button">Move to</button>
//             </div>
//         </div>

//         <div class="email-content-body">
//             <iframe src="${games[idx].ifrmSrc}" width="790" height="500"></iframe>
//         </div>
//     </div>
//     `;

//     let main = document.getElementById('main');
//     main.innerHTML = displayGameBody;

//     let btn_delete = document.getElementById('delete');
//     btn_delete.addEventListener('click', () => deleteGame(btn_delete.dataset.id, games));
// }

// // function for deleting game
// function deleteGame(index, games) {
//     // if this current game does not have a key value of deleted:true
//     if (!games[index].deleted) {
//         // add value property of deleted:true inside the current selected game
//         games[index].deleted = true;
        
//         // user localStorage to remember current state
//         setLocalStorage();

//         // update the view of inbox 
//         let inbox = games.filter( game => !game.deleted);
//         selectedGame = 0;
//         render(inbox);
//     }
//     else {
//     // if this current game does have a key value of deleted:true
//         delete games[index].deleted;
//         setLocalStorage();
//         let filtered = games.filter( game => game.deleted);
//         selectedGame = 0;
//         render(filtered);
//     }
// }

// // setting localStore items
// function setLocalStorage() {
//     localStorage.setItem('items', JSON.stringify(games));
// }

// // if localStorage exists called 'items' then use it, else use global games
// if (localStorage.getItem('items')) {
//     games = JSON.parse(localStorage.getItem('items'));
//     let filtered = games.filter( game => !game.deleted);
//     render(filtered);
// }
// else {
//     // calling the "render(games)" function
//     render(games);
// }

var app = new Vue({
    el: "#layout",
    mounted: function() {
        this.gen = this.addEmail();
    },
    data: {
        emails: [
            {"first_name":"Darby","last_name":"Sturte","subject":"Organized optimal archive","body":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","time":"7:06 AM","date":"5/26/2017","avatar":"https://robohash.org/accusamusethic.bmp?size=50x50&set=set1"},
            {"first_name":"Everett","last_name":"Burd","subject":"Seamless heuristic functionalities","body":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","time":"10:55 AM","date":"7/15/2017","avatar":"https://robohash.org/harummodipraesentium.jpg?size=50x50&set=set1"},
            {"first_name":"Kenny","last_name":"De Freitas","subject":"Extended empowering service-desk","body":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","time":"3:35 PM","date":"2/10/2017","avatar":"https://robohash.org/architectorerumvel.jpg?size=50x50&set=set1"},
            {"first_name":"Janey","last_name":"Froment","subject":"Diverse zero administration contingency","body":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","time":"5:01 AM","date":"2/9/2017","avatar":"https://robohash.org/cumquenisiqui.png?size=50x50&set=set1"},
            {"first_name":"Kayley","last_name":"Gaffon","subject":"Fully-configurable optimal process improvement","body":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","time":"5:08 AM","date":"7/15/2017","avatar":"https://robohash.org/quaeautillum.bmp?size=50x50&set=set1"},
        ],

        moreEmails: [
            {"first_name":"Hendrika","last_name":"Grandin","subject":"Upgradable asymmetric process improvement","body":"Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","time":"5:07 PM","date":"5/19/2017","avatar":"https://robohash.org/doloremquasienim.png?size=50x50&set=set1"},
            {"first_name":"Babbie","last_name":"Cosely","subject":"Focused solution-oriented knowledge base","body":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","time":"3:32 PM","date":"4/25/2017","avatar":"https://robohash.org/molestiaeautemnon.png?size=50x50&set=set1"},
            {"first_name":"Ty","last_name":"Janas","subject":"Adaptive optimizing capacity","body":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","time":"6:07 PM","date":"4/25/2017","avatar":"https://robohash.org/liberoautdolorum.png?size=50x50&set=set1"},
            {"first_name":"Charlot","last_name":"Aspell","subject":"Cloned bi-directional methodology","body":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","time":"7:20 PM","date":"2/28/2017","avatar":"https://robohash.org/velitearumnesciunt.jpg?size=50x50&set=set1"},
            {"first_name":"Hobard","last_name":"Brucker","subject":"Vision-oriented grid-enabled flexibility","body":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","time":"2:46 PM","date":"3/30/2017","avatar":"https://robohash.org/estrepellatquod.jpg?size=50x50&set=set1"}
        ],

        activeEmail: '',
        index: 0,
        gen: ''
    },

    methods: {
        addEmail: function*() {
            let index = 0;

            while (index < this.moreEmails.length)
                yield this.moreEmails[index++];
        },

        // selecting and displaying full email to main
        selectedEmail: function(email, index) {
            console.log(email, index);
            this.index = index;
        },

        // adds new email from moreEmails array
        // unshift is used to have email display at the top
        btn_addEmail: function(event) {
            event.preventDefault();
            let newEmail = this.gen.next() || {};
            newEmail.done ? console.warn('no more emails') : 
            this.emails.unshift(newEmail.value);
        },

        // deletes current email
        btn_delete: function(emails, index) {
            if (emails[index].deleted === true) {
                emails[index].deleted = false;
                console.info(`Delete ${emails[index].subject}`);
            }
            else {
                this.$set(emails[index], 'deleted', true);
                this.emails.splice(index, 1);
                // this.emails.filter(emails[index].deleted);
                console.info(`Deleted ${emails[index].subject}`);
            }
        },

        btn_inbox: function(event) {
            event.preventDefault();
            console.log('inbox');
        },

        btn_trash: function(event) {
            event.preventDefault();
            // let filtered = this.emails.filter(email.deleted);
            console.log('trash');
        }
        // trash.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     let filtered = games.filter( game => game.deleted);
        //     selectedGame = 0;
        //     render(filtered);
        // });
    }
})
