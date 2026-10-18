
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 35,
    paddingBottom: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 25,
    paddingBottom: 24,
    backgroundColor: '#FFFDFC',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F0ED',
  },

  headerIcon: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#FFF0DF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  headerDetails: {
    flex: 1,
  },

  headerText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1D2B3D',
    letterSpacing: 0.2,
  },

  headerSubtitle: {
    fontSize: 12,
    color: '#718096',
    marginTop: 5,
    lineHeight: 18,
  },

  notificationList: {
    paddingHorizontal: 18,
    paddingTop: 20,
    gap: 16,
  },

  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 14,
    minHeight: 142,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  notificationDetails: {
    flex: 1,
    justifyContent: 'center',
  },

  notificationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#17263A',
    lineHeight: 21,
  },

  orderDetails: {
    fontSize: 12,
    color: '#718096',
    marginTop: 7,
    lineHeight: 18,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 7,
  },

  notificationTime: {
    fontSize: 12,
    fontWeight: '500',
    flexShrink: 1,
  },

  arrowContainer: {
    marginLeft: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyState: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 105,
    marginBottom: 35,
  },

  emptyIconCircle: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: '#F3F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
  },

  emptyTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1D2B3D',
    textAlign: 'center',
  },

  emptyDescription: {
    fontSize: 14,
    lineHeight: 24,
    color: '#718096',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default styles;