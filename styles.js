import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f0f0f0',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
		color: '#6962AD',
	},
	bookItem: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		padding: 16,
		marginVertical: 8,
		borderRadius: 8,
	},
	bookImage: {
		width: 80,
		height: 120,
		marginRight: 16,
		borderRadius: 8,
	},
	bookDetails: {
		flex: 1,
	},
	bookImageDetail: {
		width: '100%',
		height: 200,
		borderRadius: 8,
		marginBottom: 16,
	},
	bookTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	bookAuthor: {
		marginTop: 8,
	},
	storeButton: {
		backgroundColor: '#3498db',
		padding: 8,
		borderRadius: 8,
		marginLeft: 8,
		alignSelf: 'flex-start',
	},
	removeButton: {
		backgroundColor: '#e74c3c',
		padding: 8,
		borderRadius: 8,
		marginLeft: 8,
		alignSelf: 'flex-start',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	searchInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
		borderRadius: 8,
	},
	storedBooksButton: {
		position: 'absolute',
		bottom: 16,
		right: 16,
		backgroundColor: '#faed39',
		padding: 16,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1,
	},
	badge: {
		position: 'absolute',
		top: -5,
		right: -5,
		backgroundColor: 'red',
		borderRadius: 10,
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	badgeText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 12,
	},
	storedBookItem: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 16,
		marginVertical: 8,
		borderRadius: 8,
	},
	storedBookImage: {
		width: 80,
		height: 120,
		marginRight: 16,
		borderRadius: 8,
	},
	storedBookDetails: {
		flex: 1,
	},
	storedBookTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	storedBookPreview: {
		marginTop: 8,
		color: '#555',
	},
	storedBookAddedDate: {
		marginTop: 8,
		color: '#888',
	},
});

export default styles;
