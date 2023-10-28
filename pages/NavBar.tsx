// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const slideAnimation = new Animated.Value(-250);

//   const toggleNavBar = () => {
//     Animated.timing(slideAnimation, {
//       toValue: isOpen ? -250 : 0,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();

//     setIsOpen(!isOpen);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleNavBar} style={styles.menuButton}>
//         <Text style={styles.menuText}>☰</Text>
//       </TouchableOpacity>

//       <Animated.View
//         style={[
//           styles.navBar,
//           { left: slideAnimation },
//         ]}
//       >
//         {isOpen && (
//           <View>
//             <Text>Projects</Text>
//             <Text>Milestones</Text>
//             <Text>Reports</Text>
//             <Text>Sign Out</Text>
//           </View>
//         )}
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   menuButton: {
//     paddingHorizontal: 16,
//   },
//   menuText: {
//     color: 'black',
//     fontSize: 50,
//   },
//   navBar: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     width: 250,
//     backgroundColor: 'white',
//     paddingVertical: 16,
//     paddingLeft: 24,
//     elevation: 3,
//   },
// });

// export default NavBar;
