import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Bio() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <div className="py-10" />
            <section className="gear bg-gray-50 py-8 px-4">
                <div className="extra-margin-top" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {language === "en" ? "GEAR" : "SOITTIMET"}
                </h1>

                <div className="flex flex-wrap justify-center">
                    <div className="max-w-md mx-auto bg-white-50 rounded-xl shadow-md overflow-hidden m-3 md:max-w-2xl">
                        <img
                            className="h-64 w-full object-cover"
                            src="ROLANDimage.JPG"
                            alt="Picture of Roland JX-305 Groovesynth synthesizer"
                        />
                        <div className="p-8">
                            <h3 className="font-semibold text-xl mb-2">
                                Roland JX-305 GrooveSynth
                            </h3>
                            <p className="text-gray-500">
                                {language === "en"
                                    ? "The Roland JX-305 Groovesynth synthesizer was produced in 1998 by Roland. It is very similar to a Roland MC-505 with an additional set of 61 keys. The keyboard is sensitive to velocity and has channel aftertouch. This keyboard was aimed at producers of dance and trance music and was during the late 90s also popular for live performances. The synth has 9 MIDI control knobs and a 2 line LCD display."
                                    : "Roland JX-305 Groovesynth-syntetisaattori tuotettiin vuonna 1998 Rolandin toimesta. Se muistuttaa paljon Roland MC-505 -laitetta, mutta siinä on lisäksi 61 kosketinta. Koskettimisto on herkkä voimakkuudelle ja sillä on kanavan aftertouch-ominaisuus. Tämä syntetisaattori oli suunnattu tanssimusiikin tuottajille ja se oli myös suosittu live-esiintymisissä myöhäisellä 90-luvulla. Syntetisaattorissa on yhdeksän MIDI-säätönuppia ja kaksirivinen LCD-näyttö."}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-3 md:max-w-2xl">
                        <img
                            className="h-64 w-full object-cover"
                            src="ARTURIAimage.JPG"
                            alt="Picture of Arturia KeyLab 49 midi keyboard"
                        />
                        <div className="p-8">
                            <h3 className="font-semibold text-xl mb-2">
                                Arturia KeyLab 49
                            </h3>
                            <p className="text-gray-500">
                                {language === "en"
                                    ? "Geared for maximum compatibility, KeyLab Essential gives you unadulterated control of your digital world, seamlessly integrating with virtual instruments and DAW software. KeyLab Essential is packed with clever controls that help you make swift work of everyday tasks within your recording software. Play your track, jog forwards and back, save, toggle your metronome and loop, record, and punch in on the fly. This functionality keeps your hands on the controller and your mind in the music. As well as offering ultimate integration with Analog Lab, KeyLab Essential is a universal MIDI controller, compatible with any third-party instruments or software. KeyLab Essential also comes with Ableton Live Lite so you can start recording, editing, and releasing your music with one of the most popular music platforms on the planet."
                                    : "KeyLab Essential on suunniteltu maksimaalista yhteensopivuutta varten, ja se antaa sinulle hallinnan digitaalisessa maailmassasi, integroimalla saumattomasti virtuaalisten instrumenttien ja DAW-ohjelmistojen kanssa. KeyLab Essential on täynnä älykkäitä ohjaimia, jotka auttavat sinua tekemään nopeaa työtä tallennusohjelmistossasi. Soita kappaleesi, kelaat eteen- ja taaksepäin, tallenna, käytä metronomia ja loop-toimintoa, tee äänityksiä ja aloita ja lopeta niitä helposti. Tämä toiminnallisuus pitää kätesi ohjaimella ja mielesi musiikissa. KeyLab Essential on myös yhteensopiva minkä tahansa kolmannen osapuolen instrumenttien tai ohjelmistojen kanssa, ja se on universaali MIDI-ohjain. KeyLab Essential toimitetaan myös Ableton Live Litellä, joten voit aloittaa musiikin tallentamisen, editoinnin ja julkaisun yhdellä suosituimmista musiikkialustoista maailmassa."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
