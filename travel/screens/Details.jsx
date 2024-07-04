import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Img from "../assets/img2.jpg";

const Details = () => {
  return (
    <>
      <View style={styles.detailHeader}>
        <Image source={Img} style={styles.imageHeader} />
        <Text style={styles.headerText}>Hiking the Grand Canyon</Text>
        <Text style={styles.headerTextt}>USA</Text>
      </View>

      <View style={styles.detailsInfo}>
        <Text style={styles.text}>Description</Text>
        <Text style={{ fontSize: 15, marginTop: 10, color: "#C4C4C4" }}>
          Great day hikes and backpacking routes on the North and South Rim of
          this century-old national park include easy hikes overlooking the rim
          and more rugged trekking options that descend into the canyon.
        </Text>

        <View style={styles.info}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 20,
                color: "#C4C4C4",
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: "#F35D38",
              }}
            >
              $300/Person
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 20,
                color: "#C4C4C4",
              }}
            >
              Rating
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: "#F35D38",
              }}
            >
              4.5/5
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 20,
                color: "#C4C4C4",
              }}
            >
              Duration
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: "#F35D38",
              }}
            >
              3 hours
            </Text>
          </View>
        </View>

        <Button
          style={styles.bookBTN}
          labelStyle={{ color: "white", fontSize: 18 }}
        >
          Book Now
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageHeader: {
    width: 450,
    height: 450,
    marginTop: 30,
  },
  headerText: {
    position: "absolute",
    bottom: 140,
    left: 20,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  headerTextt: {
    position: "absolute",
    bottom: 100,
    left: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  detailsInfo: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    marginTop: -30,
    padding: 20,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  detailHeader: {
    alignItems: "center",
    position: "relative", // Ensure the parent has position relative for absolute positionin
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 35,
  },
  bookBTN: {
    backgroundColor: "#F35D38",
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Details;
