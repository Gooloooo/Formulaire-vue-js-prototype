var app = new Vue({
    el: "#app",
    data: {
        nom: "",
        prenom: "",
        date: "",
        bio: "",
        hobbie1: "",
        hobbie2: "",
        hobbie3: "",
        musique1: "",
        musique2: "",
        musique3: "",
        bgcoloraffich: "",
        txtcoloraffich: "",
    },

    methods: {

        bgcolor: function (color) {
            if (color != ''){
                this.bgcoloraffich = color;
            } else {
                this.bgcoloraffich = "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
            }
        },

        txtcolor: function (txtcolor) {
            if (txtcolor != ''){
                this.txtcoloraffich = txtcolor;
            } else {
                this.txtcoloraffich = "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
            }
        },

    }
})