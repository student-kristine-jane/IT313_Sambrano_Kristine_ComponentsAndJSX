import { StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Course: {course}</Text>
      <Text style={styles.info}>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    marginBottom: 3,
  },
  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
