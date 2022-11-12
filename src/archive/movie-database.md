---
    featured: true
    blog: false
    title: Nomi
    slug: nomi
    thumbnail: /assets/nomi-thumbnail.jpg
    alt: Nomi Front page
    excerpt: 
        Nomi is a movie database that was created using NextJS. Powered by the TMDB API, Nomi can display the hottest recent movies, and also has a functional search and authentication system.
    author: Danial Daneshfar, Jalen Cameron, Jed Borseth, Reilly LeClaire
    date: 2022-07
    tools: 
        NextJS, NextAuth, Sass, MaterialUI, AdobeXD, Github, Vercel
    role: Developer
    challenge: 
        The challenge of this project was learning how to collaborate properly and effeciently in a group while working with a language we were not familiar with.
    solution:
        We spent quote a bit of time communicating and planning out our roles and tasks for this project. We split the group up to 2 developers and 2 designers with occasional overlap inbetween.
    live: https://nomi.danial.dev/
    git: https://github.com/Dandazine/nomi
---

## Summary

Nomi is a collaborative movie database project that was created in **NextJs**- a React Framework. It was made in order to display all featured movies from TheMovieDataBase, using their own **TMDB API**. With Nomi you can use the authentication system, which we made using **NextAuth**, to sign in with either Github or Google. When signed in, you can also favourite your selection of movies, and access them from the favourites page. We also developed a search function, which sends a separate API call, and displays search results based on user input in the search field if there are any matching movies on the database.

Our styling was done with **Sass**, a CSS extension, and **Material UI**.

## Development

As one of the two Developers, I worked on the functionality of the site, and helped clean up non-semantic code. My biggest contribution to the website was making sure the search function works and the website can return the correct results when a user inputs their search into the search field. I also helped link the movie to its respective page using NextJs's Link feature.

    const [mobileSearch, setMobileSearch] = useState(false);

    useEffect(() => {
        const mediaWatcher = window.matchMedia("(max-width: 639px)");
        setMobile(mediaWatcher.matches);
        function updateIsNarrowScreen(e) {
        setMobile(e.matches);
        setResponse("");
        if (!e.matches) {
            setMenu(false);
            setMobileSearch(false);
        }
        }
        mediaWatcher.addEventListener("change", updateIsNarrowScreen);
        return function cleanup() {
        mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
        };
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search?.length <= 0) {
        setResponse("");
        return;
        }
        if (!search) {
        setResponse("");
        return;
        }
        const fetchQuery = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=565e5a5d8e336b7cee4dc5ea476e08f6&query=${search}`
        );
        console.log(fetchQuery);
        fetchQuery.json().then((response) => {
        setResponse(response);
        });
    };

    function handleContent(e) {
        setSearch(e.target.value);
        if (e.target.value.length <= 0) {
        setResponse("");
        }
    }

    const Search = ({ handleSearch, handleContent, mobile }) => {
    return (
        <div className={`${!mobile && "search"}`}>
        <form
            onSubmit={(e) => {
            {
                handleSearch(e);
            }
            }}
        >
            <button type="submit">
            <AiOutlineSearch className="search-icon" />
            </button>
            <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
                handleContent(e);
            }}
            />
        </form>
        </div>
    );
    };

## Styling

For styling, I contributed to the group by fixing small styling errors or CSS issues if the design team had any issues.
