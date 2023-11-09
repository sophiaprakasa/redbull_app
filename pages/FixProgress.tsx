import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Modal, Pressable, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const projectsData = [
  {id: '1', name: 'Project A', completion: 80},
  {id: '2', name: 'Project B', completion: 60},
  {id: '3', name: 'Project C', completion: 45},
  // Add more project data here
];

const ProjectsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleFilterPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleFilterOptionPress = (filterType) => {
    setFilterType(filterType); // Set the selected filter type
    setModalVisible(false); // Close the modal after selection
};

  const getPercentColor = (percent) => {
    if (percent <= 25) {
      return styles.percentRed;
    } else if (percent <= 75) {
      return styles.percentOrange;
    } else {
      return styles.percentGreen;
    }
  };

  let displayedProjects = filteredProjects;
  if (filterType === 'complete') {
    displayedProjects = projectsData.filter((project) => project.completion === 100);
  } else if (filterType === 'low') {
    displayedProjects = projectsData.filter((project) => project.completion <= 25);
  } else if (filterType === 'medium') {
    displayedProjects = projectsData.filter((project) => project.completion > 25 && project.completion <= 75);
  } else if (filterType === 'high') {
    displayedProjects = projectsData.filter((project) => project.completion > 75);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={20} color="black"/>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      </View>
      <View style={styles.topBar}>
        <Text style={styles.title}>ALL PROJECTS</Text>
        <TouchableOpacity style={styles.filterIconContainer} onPress={handleFilterPress}>
          <AntDesign name="filter" size={24} color="black" style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={displayedProjects.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={[styles.completion, getPercentColor(item.completion)]}>
              {item.completion}% complete
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: 'gray', // Adjust color as needed
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  searchBar: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    padding: 10,
    },
  projectItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  projectName: {
    fontSize: 16,
  },
  completion: {
    fontSize: 16,
  },
  percentCompletion: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  percentGreen: {
    color: 'green',
  },
  percentOrange: {
    color: 'orange',
  },
  percentRed: {
    color: 'red',
  },
  filterIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  filterIcon: {
    marginRight: 10,
  },
});

export default ProjectsScreen;