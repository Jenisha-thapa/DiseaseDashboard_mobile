import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CityPreventive() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const cityName = params.cityName || 'Kathmandu';
  const season = params.season || 'Monsoon';

  // Simple data
  const data = {
    personal: [
      'Wash hands frequently with soap and water',
      'Use hand sanitizer',
      'Wear masks in crowded places',
      'Keep distance from people',
    ],
    environmental: [
      'Keep rooms ventilated',
      'Clean surfaces regularly',
      'Avoid crowded indoor spaces',
      'Dispose waste properly',
    ],
    airQuality: 'Wear a mask if air is polluted',
    waterSafety: 'Drink filtered or boiled water',
    crowdAvoidance: 'Avoid crowded areas during rush hours',
    localTips: [
      'Use air purifiers indoors',
      'Avoid street food in tourist areas',
      'Keep windows closed during dust storms',
    ],
    vaccinationCenters: ['Bir Hospital', 'Patan Hospital', 'TU Teaching Hospital'],
    seasonal: {
      priority: 'Water and Vector Control',
      measures: [
        'Eliminate standing water',
        'Use waterproof shoes',
        'Keep emergency supplies',
        'Increase hygiene practices',
      ],
      risks: 'Flooding may cause waterborne diseases',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Preventive Measures</Text>
        </View>

        <View style={styles.content}>
          {/* City Info */}
          <View style={styles.alertCard}>
            <Text style={styles.alertTitle}>{cityName} Prevention Guide</Text>
            <Text style={styles.alertText}>
              Measures for {cityName} during {season} season
            </Text>
          </View>

          {/* Seasonal Priority */}
          <View style={styles.priorityCard}>
            <Text style={styles.priorityTitle}>{season} Season Priority</Text>
            <Text style={styles.priorityFocus}>{data.seasonal.priority}</Text>
            <Text style={styles.priorityRisk}>{data.seasonal.risks}</Text>
          </View>

          {/* City Measures */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>City Specific Measures</Text>
            <Text>Air Quality: {data.airQuality}</Text>
            <Text>Water Safety: {data.waterSafety}</Text>
            <Text>Crowd Avoidance: {data.crowdAvoidance}</Text>
          </View>

          {/* Seasonal Measures */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Seasonal Measures</Text>
            {data.seasonal.measures.map((m, i) => (
              <Text key={i}>• {m}</Text>
            ))}
          </View>

          {/* Local Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Local Tips</Text>
            {data.localTips.map((tip, i) => (
              <Text key={i}>• {tip}</Text>
            ))}
          </View>

          {/* Personal Hygiene */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Hygiene</Text>
            {data.personal.map((m, i) => (
              <Text key={i}>• {m}</Text>
            ))}
          </View>

          {/* Environmental Safety */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Environmental Safety</Text>
            {data.environmental.map((m, i) => (
              <Text key={i}>• {m}</Text>
            ))}
          </View>

          {/* Vaccination Centers */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vaccination Centers</Text>
            {data.vaccinationCenters.map((center, i) => (
              <Text key={i}>• {center}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollView: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 18, fontWeight: '600', color: Colors.text, marginLeft: 16 },
  content: { padding: 20 },
  alertCard: { marginBottom: 16 },
  alertTitle: { fontSize: 16, fontWeight: '600' },
  alertText: { fontSize: 12, color: Colors.textSecondary },
  priorityCard: { marginBottom: 16 },
  priorityTitle: { fontWeight: '600' },
  priorityFocus: { color: Colors.primary },
  priorityRisk: { fontSize: 12 },
  section: { marginBottom: 16 },
  sectionTitle: { fontWeight: '600', marginBottom: 4 },
});
