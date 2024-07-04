import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-paper";
import User from '../assets/user.jpg'
import discoverData from '../Data/data';
import activitiesData from "../Data/activitiesData";
import Img1 from '../assets/img3.jpg'
import Img2 from "../assets/img4.jpg"


const Welcome = ({navigation}) => {
    const renderDiscover = ({item}) => {
        return (
          <>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={()=>{
              navigation.navigate('details')
            }}>
              <ImageBackground
                source={item.image}
                style={styles.cardImage}
                imageStyle={styles.renderImages}
              >
                <View style={styles.renderText}>
                  <Text style={{ color: "white", fontSize: 20, marginBottom:5 }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.location}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </>
        );
    }
    const renderActivities = ({item}) => {
      return (
        <>
          <View>
            <Image
              source={item.icon}
              style={styles.activties}
              imageStyle={{ borderRadius: 20 }}
            />
            <View>
              <Text style={{marginLeft:30}}>{item.text}</Text>
            </View>
          </View>
        </>
      );
    }



    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Icon source="menu" size={30} />
            <Image
              source={User}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </View>

          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 30 }}>
              Discover
            </Text>
          </View>

          <View style={styles.headerList}>
            <Text style={{ fontSize: 18, color: "red" }}>All</Text>
            <Text style={{ fontSize: 18 }}>Destination</Text>
            <Text style={{ fontSize: 18 }}>Cities</Text>
            <Text style={{ fontSize: 18 }}>Experiences</Text>
          </View>

          <View>
            <FlatList
              data={discoverData}
              renderItem={renderDiscover}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 30 }}>
              Activities
            </Text>

            <View>
              <FlatList
                data={activitiesData}
                renderItem={renderActivities}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 30 }}>
              Learn More
            </Text>
            <View style={styles.learnImages}>
              <Image
                source={Img1}
                style={{
                  width: 150,
                  height: 150,
                  marginLeft: -12,
                  borderRadius: 30,
                }}
              />
              <Image
                source={Img2}
                style={{
                  width: 150,
                  height: 150,
                  marginLeft: -20,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:'white'
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 210,
    marginTop: 30,
  },
  headerList: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginTop: 30,
  },
  cardImage: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 30,
  },
  renderImages: {
    borderRadius: 30,
  },
  activties: {
    width: 100,
    height: 100,
    marginRight: 15,
    marginTop:10,
  },
  learnImages: {
    display: "flex",
    flexDirection: "row",
    gap:40,
    marginTop:10,
  },
});

export default Welcome;
