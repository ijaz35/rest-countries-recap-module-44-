const loadCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json();
    showCountries(data);
};
loadCountries();
const showCountries = (countries) => {
    // console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

};

//option-3 (Destructuring in parameter)
const getCountry = ({ name, flags, population, maps }) => {
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <div>
            <img src='${flags.png}'>
        </div>
        <p>${population}</p>
        <p>
        <a target="_blank" href="${maps.googleMaps}" >See in maps</a>
        </p>
    </div>
    `
}

//option-2
/* const getCountry = (country) => {
    console.log(country);
    const { name, flags, population, maps } = country;

    return `
    <div class="country">
        <h2>${name.common}</h2>
        <div>
            <img src='${flags.png}'>
        </div>
        <p>${population}</p>
        <p>
        <a target="_blank" href="${maps.googleMaps}" >See in maps</a>
        </p>
    </div>
    `
} */

//option-1
/* const getCountry = (country) => {

    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <div>
            <img src='${country.flags.png}'>
        </div>
    </div>
    `
} */