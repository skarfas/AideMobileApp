
import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Module from '../../components/Modules/Module'

export default class Main extends Component {
  render() {
    let dimensions = Dimensions.get("window"); 17
    let imageHeight = 200;
    let imageWidth = 200;
    return (
      <Fragment>
        <SafeAreaView>
          <ScrollView>

            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <View>
                <Image source={'../../assets/teamwork.png'}></Image>
                <Button title={(this.props.email === undefined) ? 'No entered email' : this.props.email} />
                <Button title='Logout' onPress={() => this.props.navigation.navigate('LoginNavigator')} />
              </View>
              <View style={styles.body}>

                {/* People */}
                <View style={styles.container}>
                  <Text style={styles.headerText}>People</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity>
                      <Module
                        title="Employee Profiles"
                        image={require("../../assets/CC.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/teamwork.png")}
                        text="Personal Info, Email, Contacts and Work Place"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Module
                        title="Attendance"
                        image={require("../../assets/Attendance.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/AttendanceIcon.png")}
                        text="Skills and Competence"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Module
                        title="Resource Planner"
                        image={require("../../assets/ResourcePlanner.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/resourcePlanner.png")}
                        text="Resource Planner"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Module
                        title="Skills Matrix"
                        image={require("../../assets/ES.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/puzzle.png")}
                        text="Skills and Competence"
                      />
                    </TouchableOpacity>

                  </ScrollView>
                </View>

                {/* Performance */}
                <View style={styles.container}>
                  <Text style={styles.headerText}>Performance</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.Testing}>


                      <TouchableOpacity>
                        <Module
                          title="Task Monitoring"
                          image={require("../../assets/TaskMonitoring.jpg")}
                          author="Retail Services"
                          icon={require("../../assets/TaskMonitorIcon.png")}
                          text="Display list of outstanding task"
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Module
                        title="Billable & Non-billable"
                        image={require("../../assets/Billable.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/BillableIcon.png")}
                        text="Skills and Competence"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Module
                        title="Projects"
                        image={require("../../assets/Projects2.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/project.png")}
                        text="Skills and Competence"
                      />
                    </TouchableOpacity>

                  </ScrollView>
                </View>

                <View style={styles.container}>
                  <Text style={styles.headerText}>Performance</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity>
                      <Module
                        title="Employee Profiles"
                        image={require("../../assets/CC.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/teamwork.png")}
                        text="Personal Info, Email, Contacts and Work Place"
                      />
                    </TouchableOpacity>


                    <TouchableOpacity>
                      <Module
                        title="Skills Matrix"
                        image={require("../../assets/ES.jpg")}
                        author="Retail Services"
                        icon={require("../../assets/puzzle.png")}
                        text="Skills and Competence"
                      />
                    </TouchableOpacity>

                  </ScrollView>
                </View>


              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#e5e5e5',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    textAlign: "left",
    margin: 10,
    marginLeft: 20,
    color: Colors.dark,

    elevation: 5
  },
  Testing: {
    elevation: 5
  }
});
