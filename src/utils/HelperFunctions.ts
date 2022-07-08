export const capitalize = (word:string | undefined) => {
    if(word === undefined){
        return "";
    }
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const getVulnerabilities = (types:string[] | undefined) => {
    if (types === undefined)
        return [];
    // SOURCE: https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses
    const typeToColorClassMap = new Map<string, string[]>([
        ["normal", ["fighting"]],
        ["fighting", ["flying", "psychic", "fairy"]],
        ["flying", ["rock", "electric", "ice"]],
        ["poison", ["ground", "psychic"]],
        ["ground", ["water", "grass", "ice"]],
        ["rock", ["fighting", "ground", "steel", "water", "grass"]],
        ["bug", ["flying", "rock", "fire"]],
        ["ghost", ["ghost", "dark"]],
        ["steel", ["fighting", "ground", "fire"]],
        ["fire", ["rock", "ground", "water"]],
        ["water", ["ground"]],
        ["grass", ["flying", "poison", "bug", "fire", "ice"]],
        ["electric", ["ground"]],
        ["psychic", ["bug", "ghost", "dark"]],
        ["ice", ["fighting", "rock", "steel", "fire"]],
        ["dragon", ["ice", "dragon", "fire"]],
        ["dark", ["fighting", "bug", "fairy"]],
        ["fairy", ["poison", "steel"]],
        ["unknown", ["unknown"]],
        ["shadow", ["unkown"]],
      ]);
      const vulnerabilities:string[] = [];
      types.map((type) => {
        const temp = typeToColorClassMap.get(type);
        if(temp === undefined)
            return undefined;
        vulnerabilities.push(...temp);
        return undefined;
        });
    return vulnerabilities;
};