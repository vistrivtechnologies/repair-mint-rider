import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export default function DeliveredOrder() {
    const navigation = useNavigation()
    return (
        <View style={ { flex: 1, backgroundColor: "#fff" } }>
            <ScrollView style={ { flexDirection: "column", width: "100%" } } contentContainerStyle={ { alignItems: "center" } }>

                <View style={ { width: "90%", marginTop: 12 } }>
                    <Text style={ { fontFamily: "Inter_24pt-SemiBold", fontSize: 19, color: "#000" } }>All Delivered</Text>
                </View>

                <View style={ { width: "90%", height: 200, marginTop: 10, marginBottom: 5, borderRadius: 10, borderColor: "#C9C9C9", borderWidth: 1, flexDirection: "row" } }>
                    <View style={ { width: "70%", height: "100%", } }>
                        <View style={ { marginTop: 10 } }>
                            <Text style={ { fontFamily: "Inter_24pt-SemiBold", color: "#000", marginLeft: 15, fontSize: 15 } }>Order ID</Text>
                            <Text style={ { marginLeft: 15, fontFamily: "Inter_24pt-Medium", fontSize: 14, color: "#d0d0d0" } }>68sdfsdfdsgfdgdrffesdf</Text>

                        </View>
                        <View style={ { marginTop: 10, flexDirection: "row" } }>
                            <Text style={ { fontFamily: "Inter_24pt-SemiBold", color: "#000", marginLeft: 15, fontSize: 15 } }>Order Place On :</Text>
                            <Text style={ { fontFamily: "Inter_24pt-Medium", fontSize: 14, color: "#d0d0d0", marginTop: 2, marginLeft: 3 } }>07-06-2015</Text>
                        </View>

                        <View style={ { marginTop: 10, } }>
                            <Text style={ { fontFamily: "Inter_24pt-SemiBold", color: "#000", marginLeft: 15, fontSize: 15 } }>Payment Status </Text>
                            <Text style={ { fontFamily: "Inter_24pt-Medium", fontSize: 14, color: "#d0d0d0", marginTop: 2, marginLeft: 15 } }>COD - Pending</Text>
                        </View>
                        <View style={ { marginTop: 10, flexDirection: "row" } }>
                            <Text style={ { fontFamily: "Inter_24pt-SemiBold", color: "#000", marginLeft: 15, fontSize: 20 } }>Total :</Text>
                            <Text style={ { fontFamily: "Inter_24pt-SemiBold", color: "rgb(61,186,66)", marginTop: 2, marginLeft: 5, fontSize: 20, } }>$185</Text>
                        </View>
                    </View>
                    <View style={ { width: "30%", height: "100%", flexDirection: "column", justifyContent: "space-between", alignItems: "center" } }>

                        <View style={ { width: "100%", height: 40, backgroundColor: "rgb(61,186,66)", borderTopRightRadius: 10, borderBottomLeftRadius: 10, flexDirection: "column", alignItems: "center", justifyContent: "center" } }>
                            <Text style={ { fontFamily: "Inter_24pt-Medium", color: "#fff" } }>Delivered</Text>
                        </View>


                        <TouchableOpacity onPress={ () => navigation.navigate( 'OrderDetail' ) } style={ { width: 50, height: 50, backgroundColor: "rgb(61,186,66)", borderRadius: 100, marginBottom: 10, flexDirection: "column", alignItems: "center", justifyContent: "center" } }>
                            <Feather name="chevron-right" size={ 25 } color="#fff" />
                        </TouchableOpacity>

                    </View>
                </View>



            </ScrollView>
        </View>
    )
}