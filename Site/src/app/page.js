"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState } from 'react'
import player_search from "../../player-teams.json"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const teams = [
    {value: "TOR", text: "Toronto"},
    {value: "NYY", text: "New York"},
    {value: "BAL", text: "BAL"},
    {value: "BOS", text: "BOS"},
  ]

  const [activePair, setActivePair] = useState("")

  const [Pair1, setPair1] = useState([])

  const handleChangePair1 = index => e => {
    let newArr = [...Pair1];
    newArr[index] = e.target.value;
    setPair1(newArr);
  };

  const [Pair2, setPair2] = useState([])

  const handleChangePair2 = index => e => {
    let newArr = [...Pair2];
    newArr[index] = e.target.value;
    setPair2(newArr);
  };

  const [Pair3, setPair3] = useState([])

  const handleChangePair3 = index => e => {
    let newArr = [...Pair3];
    newArr[index] = e.target.value;
    setPair3(newArr);
  };

  // search function needs to be tweaked
  const[filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
        const searchPlayer = event.target.value.toLowerCase()
        const newFilter = player_search.filter((player) => {
            return player.name.toLowerCase().includes(searchPlayer);
        });

        if (searchPlayer.length < 3) {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    // when a player is clicked
    const handlePlayerClick = (e) => {
      // if team pairing is selected, and teams are in player , add name to correct grid


      // if the teams are not in the player, show feedback 
    }

  return (
    <main className={styles.main}>
        {/* <form>
          <label for="numTeams">How many teams will you play with? The more teams the harder the game. Enter between 2-15 teams</label>
          <input type="text" id="numTeams" name="numTeams"></input>

          <h4>Choose game length</h4>
          <input type="radio" id="1min" name="gameLength"></input>
          <label for="gameLength">1 Minute</label>
          
          <input type="radio" id="2min" name="gameLength"></input>
          <label for="gameLength">3 Minutes</label>

          <input type="radio" id="2min" name="gameLength"></input>
          <label for="gameLength">5 Minutes</label>

          <input type="radio" id="2min" name="gameLength"></input>
          <label for="gameLength">Unlimited</label>

          <button>Start Game</button>

        </form> */}

        <div id="playGrid">
            <div>LOGO</div>
            <div>
              <label>Choose a team:</label>
              <select value={Pair1[0]} onChange={handleChangePair1(0)}>
                {teams.map(team => (
                  <option key={team.value} value={team.value}>
                  {team.text}
                </option>
                ))}
              </select>
            </div>

            <div>T2</div>
            <div>T3</div>
            
            <div>
              <label>Choose a team:</label>
              <select value={Pair1[1]} onChange={handleChangePair1(1)}>
                {teams.map(team => (
                  <option key={team.value} value={team.value}>
                  {team.text}
                </option>
                ))}
              </select>
            </div>
            <div onClick={() => {activePair=="T1T4" ? setActivePair("") : setActivePair("T1T4")}} className={activePair=="T1T4" ? styles.Active : styles.Inactive}>P:T1-T4</div>
            <div onClick={() => {activePair=="T2T4" ? setActivePair("") : setActivePair("T2T4")}} className={activePair=="T2T4" ? styles.Active : styles.Inactive}>P:T2-T4</div>
            <div onClick={() => {activePair=="T3T4" ? setActivePair("") : setActivePair("T3T4")}} className={activePair=="T3T4" ? styles.Active : styles.Inactive}>P:T3-T4</div>
            
            <div>T5</div>
            <div onClick={() => {activePair=="T1T5" ? setActivePair("") : setActivePair("T1T5")}} className={activePair=="T1T5" ? styles.Active : styles.Inactive}>P:T1-T5</div>
            <div onClick={() => {activePair=="T2T5" ? setActivePair("") : setActivePair("T2T5")}} className={activePair=="T2T5" ? styles.Active : styles.Inactive}>P:T2-T5</div>
            <div onClick={() => {activePair=="T3T5" ? setActivePair("") : setActivePair("T3T5")}} className={activePair=="T3T5" ? styles.Active : styles.Inactive}>P:T3-T5</div>
            
            <div>T6</div>
            <div onClick={() => {activePair=="T1T6" ? setActivePair("") : setActivePair("T1T6")}} className={activePair=="T1T6" ? styles.Active : styles.Inactive}>P:T1-T6</div>
            <div onClick={() => {activePair=="T2T6" ? setActivePair("") : setActivePair("T2T6")}} className={activePair=="T2T6" ? styles.Active : styles.Inactive}>P:T2-T6</div>
            <div onClick={() => {activePair=="T3T6" ? setActivePair("") : setActivePair("T3T6")}} className={activePair=="T3T6" ? styles.Active : styles.Inactive}>P:T3-T6</div>
      </div>

      <div>
        <button> <span>Randomize Teams and Start</span></button>
        <form type="text">Search</form>
        <div className="search">
            <input 
                type="text"
                className="searchInput" 
                placeholder="Enter Player"
                onChange={handleFilter}
                />
            <div className="search--icon"></div>

            {filteredData.length != 0 &&  (
                <div className="searchResults">
                    {filteredData.map((player) => {
                        return (<Link 
                                    key= {player.retro_id}
                                    href={{
                                        pathname: '/player/[pid]',
                                        query: { pid: player.retro_id },
                                    }}>   
                                    {player.trees == "" ? 
                                    <a className="dataItem" onClick={ () => { setFilteredData([]); }} > <h4>{player.name}</h4><p>{player.HOF}</p> <h6>(0 trades)</h6>  <h5 >{player.debut_year} - {player.last_year} </h5></a> 
                                    : 
                                    <a className="dataItem" onClick={ () => { setFilteredData([]); }} > <h4>{player.name}</h4> <p>{player.HOF}</p> <h6>({player.trees.length} {player.trees.length > 1 ? "trades" : "trade"})</h6> <h5 >{player.debut_year} - {player.last_year}</h5></a> }
                                    
                                    
                                </Link>
                            )
                    })}
                </div>
            )}
        </div>
      </div>

    </main>
  )
}
