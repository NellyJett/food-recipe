const Nutritions = () =>{
    return(
        <div className="nutritions">
            <h2>Nutritions</h2>
            <p>The table below shows nutritional values per serving  without the additional fillings</p>
            <div >
            <table>
                <tbody>
                    <tr>
                        <td>Calories</td>
                        <td style={{color:"rgb(130, 38, 38)"}} >277kcal</td>
                    </tr>
                    
                    <tr>
                        <td>Carb</td>
                        <td style={{color:"rgb(130, 38, 38)"}}>0g</td>
                    </tr>
                    
                    <tr>
                        <td>Protein</td>
                        <td style={{color:"rgb(130, 38, 38)"}}>200g</td>
                    </tr>
                    
                    <tr>
                        <td>Fat</td>
                        <td style={{color:"rgb(130, 38, 38)"}}>22g</td>
                    </tr>
                </tbody>
            </table>
            </div>
            

        </div>
    )
}
export default Nutritions