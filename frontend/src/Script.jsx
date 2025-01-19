export const onClickFunc = ({ user= "isabelle" }) => {
    console.log(user)
    fetch(`http://127.0.0.1:8080/${user}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.image);
        });
}
