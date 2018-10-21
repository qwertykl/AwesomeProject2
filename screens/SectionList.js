import React, { Component } from 'react';
import { SectionList, View, Text } from "react-native";

class SectionListPage extends Component {
    render() {
        return (
            <SectionList
            renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
            )}
            sections={[
                {title: 'Classes', data: ['Fighter', 'Rnager', 'Sorcerer']},
                {title: 'Weapons', data: ['Claymore', 'Longbow', 'Scepter']},
                {title: 'Races', data: ['Human', 'Elfkind', 'Grey']},
            ]}
            keyExtractor={(item, index) => item + index}
            />
        );
    }
}

export default SectionListPage;
