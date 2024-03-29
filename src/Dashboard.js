import React from "react";
import { Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PosterDataList from "./Components/PosterDataList";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useAppContext } from "./Components/ContextLib";

export default function Dashboard() {
  const { sidebarShow, setSidebarShow } = useAppContext();
  const [showItem, setShowItem] = React.useState(false);
  const [showCloseIcon, setShowCloseIcon] = React.useState(false);
  const [showlistItem, setShowListItem] = React.useState();
  const [posterIndex, setPosterIndex] = React.useState();
  const [changeInputValue, setChangeInputValue] = React.useState("");
  const [ArrayList] = React.useState([
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA @@._V1_SX1500_CR0, 0, 1500,999_AL_.jpg",
    },
    {
      Title: "I Am Legend",
      Year: "2007",
      Rated: "PG-13",
      Released: "14 Dec 2007",
      Runtime: "101 min",
      Genre: "Drama, Horror, Sci-Fi",
      Director: "Francis Lawrence",
      Writer:
        "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson(novel), John William Corrington, Joyce Hooper Corrington",
      Actors:
        "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find acure.",
      Language: "English",
      Country: "USA",
      Awards: "9 wins & 21 nominations.",
      Poster:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d0688a1d44131c7239999cad2ceeec122383367b38450c4f0d005127442d7d94._RI_V_TTW_.jpg",
      Metascore: "65",
      imdbRating: "7.2",
      imdbVotes: "533,874",
      imdbID: "tt0480249",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    },
    {
      Title: "300",
      Year: "2006",
      Rated: "R",
      Released: "09 Mar 2007",
      Runtime: "117 min",
      Genre: "Action, Drama, Fantasy",
      Director: "Zack Snyder",
      Writer:
        "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon(screenplay), Frank Miller(graphic novel), Lynn Varley(graphic novel)",
      Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Language: "English",
      Country: "USA",
      Awards: "16 wins & 42 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      Metascore: "52",
      imdbRating: "7.7",
      imdbVotes: "611,046",
      imdbID: "tt0416449",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw @@._V1_SX1777_CR0, 0, 1777,937_AL_.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      Rated: "PG-13",
      Released: "04 May 2012",
      Runtime: "143 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Joss Whedon",
      Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Language: "English, Russian",
      Country: "USA",
      Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      Metascore: "69",
      imdbRating: "8.1",
      imdbVotes: "1,003,301",
      imdbID: "tt0848228",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc @._V1_SX1777_CR0, 0, 1777,999_AL_.jpg",
    },
    {
      Title: "The Wolf of Wall Street",
      Year: "2013",
      Rated: "R",
      Released: "25 Dec 2013",
      Runtime: "180 min",
      Genre: "Biography, Comedy, Crime",
      Director: "Martin Scorsese",
      Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
      Actors:
        "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      Plot: "Based on the true story of Jordan Belfort, from his rise to a wealth stock - broker living the high life to his fall involving crime, corruption and the federal government.",
      Language: "English, French",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      Metascore: "75",
      imdbRating: "8.2",
      imdbVotes: "786,985",
      imdbID: "tt0993846",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE @._V1_SX1500_CR0, 0, 1500,999_AL_.jpg",
    },
    {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "937,412",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE @._V1_SX1500_CR0, 0, 1500,999_AL_.jpg",
    },
    {
      Title: "Game of Thrones",
      Year: "2011-",
      Rated: "TV-MA",
      Released: "17 Apr 2011",
      Runtime: "56 min",
      Genre: "Adventure, Drama, Fantasy",
      Director: "N/A",
      Writer: "David Benioff, D.B. Weiss",
      Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
      Plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "9.5",
      imdbVotes: "1,046,830",
      imdbID: "tt0944947",
      Type: "series",
      totalSeasons: "7",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk @._V1_SX1777_CR0, 0, 1777,999_AL_.jpg",
    },
    {
      Title: "Vikings",
      Year: "2013-",
      Rated: "TV-14",
      Released: "03 Mar 2013",
      Runtime: "44 min",
      Genre: "Action, Drama, History",
      Director: "N/A",
      Writer: "Michael Hirst",
      Actors:
        "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
      Plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
      Language: "English, Old English, Norse, Old, Latin",
      Country: "Ireland, Canada",
      Awards:
        "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.6",
      imdbVotes: "198,041",
      imdbID: "tt2306299",
      Type: "series",
      totalSeasons: "5",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE @._V1_.jpg",
    },
    {
      Title: "Gotham",
      Year: "2014-",
      Rated: "TV-14",
      Released: "01 Aug 2014",
      Runtime: "42 min",
      Genre: "Action, Crime, Drama",
      Director: "N/A",
      Writer: "Bruno Heller",
      Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
      Plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      Language: "English",
      Country: "USA",
      Awards:
        "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.0",
      imdbVotes: "133,375",
      imdbID: "tt3749900",
      Type: "series",
      totalSeasons: "3",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI @._V1_SY1000_SX1500_AL_.jpg",
    },
    {
      Title: "Power",
      Year: "2014-",
      Rated: "TV-MA",
      Released: "N/A",
      Runtime: "50 min",
      Genre: "Crime, Drama",
      Director: "N/A",
      Writer: "Courtney Kemp Agboh",
      Actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
      Plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
      Language: "English",
      Country: "USA",
      Awards: "1 win & 6 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.0",
      imdbVotes: "14,770",
      imdbID: "tt3281796",
      Type: "series",
      totalSeasons: "3",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE @._V1_SY1000_SX1500_AL_.jpg",
    },
    {
      Title: "Narcos",
      Year: "2015-",
      Rated: "TV-MA",
      Released: "28 Aug 2015",
      Runtime: "49 min",
      Genre: "Biography, Crime, Drama",
      Director: "N/A",
      Writer: "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
      Actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
      Plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
      Language: "English, Spanish",
      Country: "USA",
      Awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.9",
      imdbVotes: "118,680",
      imdbID: "tt2707408",
      Type: "series",
      totalSeasons: "2",
      Response: "True",
      Images:
        "https://imagesna.sslimagesamazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    },
    {
      Title: "Breaking Bad",
      Year: "2008-2013",
      Rated: "TV-14",
      Released: "20 Jan 2008",
      Runtime: "49 min",
      Genre: "Crime, Drama, Thriller",
      Director: "N/A",
      Writer: "Vince Gilligan",
      Actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
      Plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      Language: "English, Spanish",
      Country: "USA",
      Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "9.5",
      imdbVotes: "889,883",
      imdbID: "tt0903747",
      Type: "series",
      totalSeasons: "5",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE @._V1_SY1000_CR0, 0, 1498,1000_AL_.jpg",
    },
    {
      ComingSoon: true,
      Title: "Doctor Strange",
      Year: "2016",
      Rated: "N/A",
      Released: "04 Nov 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Scott Derrickson",
      Writer:
        "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts(story by), Scott Derrickson(story by), C.Robert Cargill(story by), Steve Ditko(comic book)",
      Actors:
        "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt1211837",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE @._V1_.jpg",
    },
    {
      ComingSoon: true,
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      Rated: "N/A",
      Released: "16 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Gareth Edwards",
      Writer:
        "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta(story), George Lucas(characters)",
      Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      Plot: "The Rebellion makes a risky move to steal the plans to the Death Star,setting up the epic saga to follow.",
      Language: "English",
      Country: "USA",
      Awards: "1 nomination.",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0, 0, 674,1000_AL_.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3748528",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE @._V1_SX1777_CR0, 0, 1777,744_AL_.jpg",
    },
    {
      ComingSoon: true,
      Title: "Assassin's Creed",
      Year: "2016",
      Rated: "N/A",
      Released: "21 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Justin Kurzel",
      Writer:
        "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie(screenplay)",
      Actors:
        "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard,Jeremy Irons",
      Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      Language: "English",
      Country: "UK, France, USA, Hong Kong",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt2094766",
      Type: "movie",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc @._V1_.jpg",
    },
    {
      ComingSoon: true,
      Title: "Luke Cage",
      Year: "2016-",
      Rated: "TV-MA",
      Released: "30 Sep 2016",
      Runtime: "55 min",
      Genre: "Action, Crime, Drama",
      Director: "N/A",
      Writer: "Cheo Hodari Coker",
      Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
      Plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3322314",
      Type: "series",
      totalSeasons: "1",
      Response: "True",
      Images:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE @._V1_SY1000_CR0, 0, 1497,1000_AL_.jpg",
    },
  ]);
  const [screenWidth, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log("screenWidth", screenWidth);
      if (screenWidth > 900) {
        setSidebarShow(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    color: "#D4D7DD",
    fontSize: "23px",
    borderRadius: "8px 0px 0px 8px",
    backgroundColor: showCloseIcon && "#1A2536",
    cursor: "pointer",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,

      width: "0%",
      [theme.breakpoints.up("sm")]: {
        width: showCloseIcon ? "567px" : "0px",
      },
    },
  }));

  const searchingData = [];
  let data = [];
  if (changeInputValue) {
    data = ArrayList.filter((item) => {
      if (item.Title != undefined) {
        return Object.values(item?.Title)
          .join("")
          .toLowerCase()
          .includes(changeInputValue?.toLowerCase());
      }
    });
    data?.map((dataItem) => searchingData?.push(dataItem));
  } else {
    ArrayList?.map((dataItem) => searchingData?.push(dataItem));
  }
  console.log("searchingData :::", searchingData);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          overflow: "scroll",
        }}
        className="mainDiv"
      >
        <div className="header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="listShowSideBarIcon"
          >
            {window.innerWidth < 600 && (
              <FormatListBulletedIcon
                onClick={() => {
                  setSidebarShow(true);
                  console.log(sidebarShow);
                }}
                style={{ color: "#D4D7DD", fontSize: "23px" }}
              />
            )}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                value={changeInputValue}
                placeholder={"Title,Movies,Keyword"}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  setChangeInputValue(e.target.value);
                }}
                onClick={() => {
                  setShowCloseIcon(true);
                }}
              />
              {showCloseIcon && (
                <CloseIcon
                  style={{
                    position: "absolute",
                    backgroundColor: "#1A2536",
                    padding: "7.5px",
                    borderRadius: "0px 8px 8px 0px",
                  }}
                  onClick={() => {
                    setShowCloseIcon(false);
                  }}
                />
              )}
            </Search>
            {/* <input
              type="text"
              value={changeInputValue}
              onChange={(e) => {
                setChangeInputValue(e.target.value);
              }}
            /> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
            className="headerTwoButton"
          >
            <WbSunnyOutlinedIcon
              style={{
                color: "#D4D7DD",
                fontSize: "23px",
                marginRight: "25px",
              }}
            />
            <MoreVertOutlinedIcon
              style={{
                color: "#D4D7DD",
                fontSize: "23px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: window.innerWidth > 600 && "56px",
            marginLeft: window.innerWidth > 600 ? "49px" : "20px",
            marginRight: window.innerWidth > 600 ? "49px" : "20px",
          }}
        >
          {showlistItem && <PosterDataList showlistItem={showlistItem} />}
          <div
            style={{
              marginTop: "50px",
              height: "100%",
              width: "100%",
              overflow: "scroll",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}
            >
              {searchingData.length > 0 &&
                searchingData.map((item, index) => (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={3}
                      lg={2.2}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {" "}
                      <div
                        className="card"
                        style={{
                          padding: "10px",
                          border:
                            posterIndex == index ? "3px solid #00E0FF" : "",
                        }}
                      >
                        <div
                          onClick={() => {
                            setShowListItem(item);
                            setShowItem(true);
                            setPosterIndex(index);
                          }}
                          style={{ width: "100%" }}
                        >
                          <img
                            src={item.Poster}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: "11px",
                            }}
                          />
                          <p
                            style={{
                              fontFamily: "Open Sans",
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "#d4d7dd",
                              marginTop: "12px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.Title}
                          </p>
                          <div>
                            <PlayCircleFilledWhiteOutlinedIcon
                              style={{ color: "#d4d7dd" }}
                            />
                            <AddCircleOutlineOutlinedIcon
                              style={{ color: "#d4d7dd", marginLeft: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
