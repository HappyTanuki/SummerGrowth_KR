function csvToJson(csv) {
  // \n or \r\n depending on the EOL sequence
  const lines = csv.split('\n');
  const delimeter = ',';

  const result = [];

  const headers = lines[0].split(delimeter);

  for (const line of lines) {
    const obj = {};
    const row = line.split(delimeter);

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      obj[header] = row[i];
    }

    result.push(obj);
  }

  // Prettify output
  return JSON.stringify(result, null, 2);
}

const csv = `name,slot,tolerance,bonuses,archetypes,baseCost,AA,AAMIN,AAMAX,AACM,BB,BBMIN,BBMAX,BBCM,BT,BTMIN,BTMAX,BTCM,TT,TTMIN,TTMAX,TTCM
무지 티셔츠,상의,1.3,Workout-wear Comfortable,casual tomboy,20,0.9,0,6,1,0.9,3,7,1,0.95,4,9,1.2,0.9,0,6,0.9
체크무늬 티셔츠,상의,1.3,Comfortable Stretchy,casual tomboy nerdy,35,0.5,0,5,1,0,null,null,null,0.75,4,9,1.2,0.75,0,8,0.9
버튼다운 셔츠,상의,1.3,,casual nerdy professional,35,0.95,0,5,1,0,null,null,null,0.8,4,9,1.2,0.5,0,8,0.9
정장셔츠,상의,1.1,,nerdy stylish professional,50,0.95,0,5,1,0,null,null,null,0.8,4,9,1.2,0.4,0,8,0.9
찢어진 셔츠,상의,1.5,Stretchy,punk tomboy sporty,15,0.7,0,5,1,0.75,2,7,1,0.75,4,9,1.2,0.6,0,8,0.9
검정 홀터넥 탑,상의,1.3,Intimidating,sexy stylish punk,85,0.85,0,5,1,0,null,null,null,0.5,4,9,1.2,0.25,0,8,0.9
크롭탑,상의,1.3,Workout-wear,sexy casual,65,0.75,0,5,1,0,null,null,null,0.5,4,9,1.2,0.25,0,8,0.9
텡크탑,상의,1.3,Workout-wear,sporty tomboy casual,20,0.65,0,5,1,0.95,2,7,1,0.85,4,9,1.2,0.75,0,8,0.9
홀터 탑,상의,1.3,Showing-off,sexy stylish,25,0.5,0,5,1,0.75,2,7,1,0.65,4,9,1.2,0.45,0,8,0.9
망사 상의,상의,1.5,Showing-off,punk sexy stylish,85,0.7,0,5,1,0,null,null,null,0,null,null,null,0.2,0,8,0.9
후드티,외투,1.5,Baggy Lactation-proof Extra warm,casual tomboy punk sporty,50,0.8,0,5,1,0.5,2,7,1,0.65,4,9,1.2,0.3,0,8,0.9
검정 트렌치코트,외투,1.3,Baggy,tomboy punk,120,0.3,0,5,1,0,null,null,null,0,null,null,null,0.2,0,8,0.9
테일러드 자켓,외투,1.1,,professional stylish,200,0.8,0,5,1,0,null,null,null,0.3,4,9,1.2,0.1,0,8,0.9
가죽 자켓,외투,1.1,,punk,95,0.3,0,5,1,0.2,2,7,1,0.4,4,9,1.2,0.3,0,8,0.9
조끼,외투,1.1,,stylish professional,50,0.45,0,5,1,0,null,null,null,0.45,4,9,1.2,0.4,0,8,0.9
스웨터,외투,1.5,Baggy Lactation-proof Comfortable Extra warm,casual nerdy,35,0.8,0,5,1,0,null,null,null,0.45,4,9,1.2,0.25,0,8,0.9
고양이 귀 후드티,외투,1.5,Baggy Lactation-proof Comfortable Extra warm,nerdy casual girly,50,0.2,0,5,1,0,null,null,null,0,null,null,null,0.1,0,8,0.9
츄리닝 상의,외투,1.5,Workout-wear Extra warm,sporty casual tomboy,65,0.3,0,5,1,0.95,2,7,1,0.75,4,9,1.2,0.3,0,8,0.9
고딕 조끼,외투,1.1,,punk,75,0.2,0,5,1,0,null,null,null,0.2,4,9,1.2,0.2,0,8,0.9
스파이크 자켓,외투,1.1,Intimidating,punk stylish sexy,75,0,null,null,null,0,null,null,null,0,null,null,null,0.1,0,8,0.9
스포츠 브라,브라,1.3,Workout-wear,sporty,50,0,null,null,null,0.75,2,7,1,0,null,null,null,0.1,0,8,0.9
푸쉬업 브라,브라,1.3,Showing-off,casual sexy,60,0.75,0,5,1,0,null,null,null,0.35,4,9,1.2,0.3,0,8,0.9
레이스 브라,브라,1.3,Showing-off,stylish sexy girly,80,0.7,0,5,1,0,null,null,null,0,null,null,null,0,null,null,null
임산부 브라,브라,1.3,Lactation-proof Stretchy,casual,50,0.7,0,5,1,0,null,null,null,0,null,null,null,0.1,0,8,0.9
체크무늬 스커트,하의,1.3,Extra warm,casual nerdy,60,0.7,0,5,1,0,null,null,null,0,null,null,null,0.2,0,8,0.9
정장바지,하의,1.1,,stylish professional,100,0.7,0,5,1,0,null,null,null,0.7,4,9,1.2,0.1,0,8,0.9
찢긴 청바지,하의,1.1,Intimidating,punk casual tomboy,40,0.4,0,5,1,0,null,null,null,0.55,4,9,1.2,0.4,0,8,0.9
검은 스커트,하의,1.3,,punk professional,50,0.6,0,5,1,0,null,null,null,0,null,null,null,0.3,0,8,0.9
청바지,하의,1.1,Comfortable,casual nerdy,30,0.95,0,5,1,0,null,null,null,0.75,4,9,1.2,0.4,0,8,0.9
조깅 팬츠,하의,1.3,Baggy Workout-wear,casual sporty,30,0,null,null,null,0.95,2,7,1,0.5,4,9,1.2,0.2,0,8,0.9
요가 바지,하의,1.3,Workout-wear,sporty,40,0.2,0,5,1,0.65,2,7,1,0.65,4,9,1.2,0.3,0,8,0.9
반바지,하의,1.3,Comfortable,sporty nerdy tomboy,50,0.65,0,5,1,0.95,2,7,1,0.5,4,9,1.2,0.3,0,8,0.9
배기팬츠,하의,1.5,Baggy Comfortable,casual tomboy,40,0.75,0,5,1,0,null,null,null,0.5,4,9,1.2,0.2,0,8,0.9
돌핀팬츠,속옷,1.3,Comfortable,tomboy casual,20,0.3,0,5,1,0.4,2,7,1,0.4,4,9,1.2,0.1,0,8,0.9
브리프,속옷,1.3,Comfortable,casual,25,0.8,0,5,1,0,null,null,null,0.5,4,9,1.2,0.1,0,8,0.9
힙스터 쇼츠,속옷,1.3,,stylish casual,35,0.4,0,5,1,0,null,null,null,0,null,null,null,0.1,0,8,0.9
스니커즈,신발,1.3,Workout-wear Comfortable,casual sporty nerdy,60,,,,,,,,,,,,,,,,
런닝화,신발,1.3,Workout-wear,casual sporty nerdy,75,,,,,,,,,,,,,,,,
전투화,신발,1.3,Intimidating,punk tomboy,100,,,,,,,,,,,,,,,,
플랫폼 부츠,신발,1.3,,stylish,80,,,,,,,,,,,,,,,,
레이스 업 부츠,신발,1.3,,punk stylish sexy,120,,,,,,,,,,,,,,,,
구두,신발,1.3,,stylish professional,75,,,,,,,,,,,,,,,,
조리,신발,1.3,Comfortable,nerdy casual,10,,,,,,,,,,,,,,,,
앵클부츠,신발,1.3,,stylish professional casual,120,,,,,,,,,,,,,,,,
하이힐,신발,1.3,Intimidating,stylish sexy,175,,,,,,,,,,,,,,,,`;

const json = csvToJson(csv);

var jObjects = JSON.parse(json);

console.log(json);

for (let i = 1; i < jObjects.length; i++) {
    jObjects[i].storeInfo = {};
    if(Number(jObjects[i].TT) !== 0){
        jObjects[i].storeInfo.tasha = {
          chance: Number(jObjects[i].TT),
          availableSizes: [Number(jObjects[i].TTMIN), Number(jObjects[i].TTMAX)],
          costModifier: Number(jObjects[i].AACM)
        };        
    }
    delete jObjects[i].TT;
    delete jObjects[i].TTMIN;
    delete jObjects[i].TTMAX;
    delete jObjects[i].TTCM;

    if(Number(jObjects[i].BB) !== 0){
       jObjects[i].storeInfo.bulkBarn = {
          chance: Number(jObjects[i].BB),
          availableSizes: [Number(jObjects[i].BBMIN), Number(jObjects[i].BBMAX)],
          costModifier: Number(jObjects[i].BBCM)
        };
    }
    delete jObjects[i].BB;
    delete jObjects[i].BBMIN;
    delete jObjects[i].BBMAX;
    delete jObjects[i].BBCM;

    if(Number(jObjects[i].BT) !== 0){
       jObjects[i].storeInfo.bigTall = {
          chance: Number(jObjects[i].BT),
          availableSizes: [Number(jObjects[i].BTMIN), Number(jObjects[i].BTMAX)],
          costModifier: Number(jObjects[i].BTCM)
        };        
    }
    delete jObjects[i].BT;
    delete jObjects[i].BTMIN;
    delete jObjects[i].BTMAX;
    delete jObjects[i].BTCM;

    if(Number(jObjects[i].AA) !== 0){
        jObjects[i].storeInfo.allisonsApparel = {
          chance: Number(jObjects[i].AA),
          availableSizes: [Number(jObjects[i].AAMIN), Number(jObjects[i].AAMAX)],
          costModifier: Number(jObjects[i].AACM)
        };        
    }
    delete jObjects[i].AA;
    delete jObjects[i].AAMIN;
    delete jObjects[i].AAMAX;
    delete jObjects[i].AACM;

    jObjects[i].tolerance = Number(jObjects[i].tolerance);
    jObjects[i].baseCost = Number(jObjects[i].baseCost);
    jObjects[i].size = 0;
    jObjects[i].id = undefined;
}
console.log(jObjects);