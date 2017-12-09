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
                // splice removes the selected email
                this.emails.splice(index, 1);
                console.info(`Deleted ${emails[index].subject}`);
            }
        },

        btn_inbox: function(event) {
            event.preventDefault();
            console.log('inbox');
        },

        btn_trash: function(event) {
            event.preventDefault();
            console.log('trash');
        }
    }
})
