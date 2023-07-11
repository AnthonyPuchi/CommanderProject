import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { getAPI, SaucerData, updateAPI } from '../service/ServiceSaucer';

const TableSaucer: React.FC = () => {
  const [saucerData, setSaucerData] = useState<SaucerData[]>([]);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedPreparation, setEditedPreparation] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const saucerData = await getAPI('http://localhost:8081/saucer');
      setSaucerData(saucerData);
    } catch (error) {
      console.error('Error fetching saucer data:', error);
    }
  };

  const handleEdit = (id: number, name: string, price: string, preparation: string) => {
    setEditMode(id);
    setEditedName(name);
    setEditedPrice(price);
    setEditedPreparation(preparation);
  };

  const handleSave = async (id: number) => {
    try {
      const saucerToUpdate = saucerData.find((saucer) => saucer.id === id);

      if (saucerToUpdate) {
        const updatedSaucerData: SaucerData = {
          ...saucerToUpdate,
          name: editedName,
          price: editedPrice,
          preparation: editedPreparation,
        };

        await updateAPI(`http://localhost:8081/saucer`, updatedSaucerData);

        const updatedData = saucerData.map((saucer) =>
          saucer.id === id ? updatedSaucerData : saucer
        );

        setSaucerData(updatedData);
        setEditMode(null);
        setEditedName('');
        setEditedPrice('');
        setEditedPreparation('');
      }
    } catch (error) {
      console.error('Error updating saucer:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saucer Table</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>ID</Text>
          <Text style={styles.tableHeader}>Name</Text>
          <Text style={styles.tableHeader}>Category</Text>
          <Text style={styles.tableHeader}>Price</Text>
          <Text style={styles.tableHeader}>Preparation</Text>
        </View>
        {saucerData.map((saucer, index) => (
          <View style={styles.tableRow} key={saucer.id}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            {editMode === saucer.id ? (
              <>
                <TextInput
                  style={styles.tableCellEditable}
                  value={editedName}
                  onChangeText={setEditedName}
                />
                <Text style={styles.tableCell}>{saucer.category}</Text>
                <TextInput
                  style={styles.tableCellEditable}
                  value={editedPrice}
                  onChangeText={setEditedPrice}
                />
                <TextInput
                  style={styles.tableCellEditable}
                  value={editedPreparation}
                  onChangeText={setEditedPreparation}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => handleSave(saucer.id)}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.tableCell}>{saucer.name}</Text>
                <Text style={styles.tableCell}>{saucer.category}</Text>
                <Text style={styles.tableCell}>{saucer.price}</Text>
                <Text style={styles.tableCell}>{saucer.preparation}</Text>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    handleEdit(saucer.id, saucer.name, saucer.price, saucer.preparation)
                  }
                >
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    alignItems: 'center',
  },
  tableHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableCellEditable: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8EC8D0',
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  saveButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'green',
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TableSaucer;
