import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import PokemonCard from "./components/PokemonCard";
import CharmenderImage from "../assets/images/charmander.png";
import Squirtle from "../assets/images/squirtle.png";
import Bulbsaur from "../assets/images/bulbasaur.png";
import Pikachu from "../assets/images/pikachu.png";

const charmenderData = {
  name: "Charmander",
  image: CharmenderImage,
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};
const squirtleData = {
  name: "Squirtle",
  image: Squirtle,
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: Bulbsaur,
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: Pikachu,
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground", ""],
};

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmenderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <StatusBar backgroundColor={"#f5f5f5"} barStyle={"dark-content"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});

export default index;
