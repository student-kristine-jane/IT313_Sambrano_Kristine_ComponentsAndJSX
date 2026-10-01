import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "./StudentCard";

type Student = {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

const students: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {`Student Roster - ${students.length} students`}
      </Text>

      <Button
        title="Reverse Roster"
        onPress={() => {
          students.reverse();
        }}
      />

      <ScrollView style={styles.list}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    marginTop: 20,
  },
});
