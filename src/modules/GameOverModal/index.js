import "./style.scss";

import * as template from "./template";

const GameOver = {

    Init( ) {

        $("#app").on("click", "#game-over button", function( event ) {
            const type = $(this).data("type");

            console.log(this);
            if(type === "replay") {
                window.location.reload();
            }

            if(type === "menu") {
                window.location.href = "/";
            }
        });
    },

    show( players ) {
        players.sort( (a, b) => {
            return - a.score + b.score;
        });

        $("#app").append(template.template(players));
    }
}

export default GameOver;

