console.log("Hola.");

const baseURL = () => {
    let arrValue = [];
    let parametro = document.getElementById("pokemon").value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + parametro;

    fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((myJson) => {
            console.log(myJson);
            let element = document.getElementById("poke-table");
            element.style.display = "block";

            if (myJson.sprites.front_default !== null)
                document.getElementById("image").src = myJson.sprites.front_default;
            else
                document.getElementById("image").src = "imagen.jpeg";

            arrValue.push(myJson.name);
            arrValue.push(myJson.id);
            arrValue.push(myJson.base_experience);
            arrValue.push(myJson.height);

            for (index in arrValue) {
                document.getElementById("parameterValue" + index).innerHTML =
                    arrValue[index];
            }
        })

        .catch((myJson) => {
            console.log(myJson.name);
            let element = document.getElementById("poke-table");
            element.style.display = "none";
        });
};