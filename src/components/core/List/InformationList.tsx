import * as React from 'react'
import { View, StyleSheet, StyleProp, Text, ActivityIndicator } from 'react-native'
import { ScheduleType } from 'src/services/videos';
import { ThemeType } from 'src/services/theme';

interface Props {
    style?: StyleProp<{}>
    data: ScheduleType[]
    theme: ThemeType
    loading: boolean
}

export class InformationList extends React.Component<Props, {}> {

    public render() {
        const { data, loading } = this.props
        if (loading) {
            return (
                <View style={this.getStyles(true)}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={this.getStyles(false)}>
                {data.map(this.renderItem)}
            </View>
        )
    }

    private renderItem = (item: ScheduleType, index: number) => {
        const { theme } = this.props
        return (
            <View key={index} style={this.getItemStyles()}>
                <View style={styles.titleContainer}>
                    <Text style={this.getTitleStyles()}>{item.name}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{ color: theme.colors.TextColor }}>{item.time}</Text>
                </View>
            </View>
        )
    }

    private getTitleStyles() {
        const { theme } = this.props
        return [
            styles.title,
            { color: theme.colors.TextColor },
        ]
    }

    private getItemStyles() {
        const { theme } = this.props
        return [
            styles.itemContainer,
            { borderBottomColor: theme.colors.SeperatorColor },
        ]
    }

    private getStyles(loading: boolean) {
        const { style } = this.props
        return [
            styles.container,
            loading && {
                justifyContent: 'center',
                alignItems: 'center',
            },
            style,
        ]
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    itemContainer: {
        width: '100%',
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title: {
        flexWrap: 'wrap'
    },
    timeContainer: {
        width: 70,
    },
    titleContainer: {
        flex: 1,
    }
})
