/*jshint esversion: 6 */
export default{
    get_random_number_index: function(){
        let rs = Math.random() * 10
        let rn = Math.ceil(rs)
        let index = rn % 9
        return index
    }
}