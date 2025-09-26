import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

type TabType = "introduction" | "meaning" | "practice";

interface SeptemberThemeTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const SeptemberThemeTabs: React.FC<SeptemberThemeTabsProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <>
      {/* Tab Navigation */}
      <div className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setActiveTab("introduction")}
          className={`text-lg font-medium pb-2 px-4 transition-all ${
            activeTab === "introduction"
              ? "text-white border-b-3 border-white"
              : "text-white/70 hover:text-white"
          }`}
        >
          Introduction
        </button>
        <button
          onClick={() => setActiveTab("meaning")}
          className={`text-lg font-medium pb-2 px-4 transition-all ${
            activeTab === "meaning"
              ? "text-white border-b-3 border-white"
              : "text-white/70 hover:text-white"
          }`}
        >
          Meaning
        </button>
        <button
          onClick={() => setActiveTab("practice")}
          className={`text-lg font-medium pb-2 px-4 transition-all ${
            activeTab === "practice"
              ? "text-white border-b-3 border-white"
              : "text-white/70 hover:text-white"
          }`}
        >
          How to practice it
        </button>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === "introduction" && <IntroductionTab />}
        {activeTab === "meaning" && <MeaningTab />}
        {activeTab === "practice" && <PracticeTab />}
      </div>
    </>
  );
};

// Introduction Tab Component
const IntroductionTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-5xl mx-auto bg-pomegranate-700/40 border border-white/20">
        <CardBody className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/monthly-themes/children-circle.png" 
                alt="Children standing in a circle"
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-white">
              <p className="text-lg leading-relaxed mb-6">
                At Family First Café, September is all about building strong 
                relationships through Respect & Dignity.
              </p>
              <p className="mb-6">
                These values shape the way we treat each other, how we see 
                ourselves, and how families grow stronger together.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">RESPECT</h3>
                <p className="mb-4">
                  Is about honoring others through actions and words. Is not just 
                  about saying 'please' and 'thank you' — it's about treating 
                  people with kindness, and celebrating differences.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">DIGNITY</h3>
                <p>
                  Is about recognizing the worth and value of every person no 
                  matter their age, background, or role. It means seeing people as 
                  important simply because they exist.
                </p>
              </div>
              
              <p className="text-sm text-white/90">
                When we live with both, we create a world where everyone feels 
                safe, valued, and heard. Families grow stronger when respect 
                becomes part of daily life, and dignity is what makes each person 
                feel valued, safe, and heard.
              </p>
              
              <p className="text-sm text-white/90 mt-4">
                This month, every activation in our cafés is designed to help 
                families practice respect in fun, creative, and meaningful ways.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

// Meaning Tab Component
const MeaningTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Image at the top */}
        <div className="w-full mb-8">
          <img 
            src="/monthly-themes/meaning.png" 
            alt="Child looking through binoculars"
            className="w-full rounded-xl max-h-96 object-cover"
          />
        </div>

        {/* Respect Section */}
        <Card className="bg-pomegranate-700/40 border border-white/20">
          <CardBody className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">Respect</h3>
              <img src="/logo/FFC Logo black.png" alt="Family First Café" 
                className="w-20 h-20 filter brightness-0 invert opacity-50" />
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">What is it?</h4>
              <p className="text-white/90 mb-3">
                Respect means showing care for yourself, others, and the world around you. It's more than manners 
                — it's making people feel important and included. It helps build strong relationships with others.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Respect is listening when someone else speaks.</li>
                <li>• Respect is treating others the way you'd like to be treated.</li>
                <li>• Respect is remembering that everyone has feelings.</li>
                <li>• Respect is using kind words: "please", "thank you" and "I am sorry".</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Why is it important?</h4>
              <p className="text-white/90 mb-3">
                Respect creates harmony and helps families and communities thrive.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• It makes problem-solving easier and kinder.</li>
                <li>• It builds strong friendships.</li>
                <li>• It makes people feel accepted and confident.</li>
                <li>• It leads to dignity — valuing ourselves and others.</li>
              </ul>
            </div>

            <div className="bg-pomegranate-800/40 rounded-xl p-6">
              <p className="text-white font-medium mb-3">
                <strong>Family Challenge:</strong> Each family member shares one way they felt respected today. Write it on a 
                "Respect Note" and pin it on your family's fridge (or the café's Respect Wall if you're visiting).
              </p>
              <p className="text-white/90">
                <strong>Café Prompt:</strong> Over your drink or snack, ask each other: What's one way we can show more respect at 
                home or school this week?
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Dignity Section */}
        <Card className="bg-pomegranate-700/40 border border-white/20">
          <CardBody className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">Dignity</h3>
              <img src="/logo/FFC Logo black.png" alt="Family First Café" 
                className="w-20 h-20 filter brightness-0 invert opacity-50" />
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">What is it?</h4>
              <p className="text-white/90 mb-3">
                Dignity means knowing that every person has worth and deserves respect. It's about treating people 
                fairly — no matter who they are.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Dignity is not something we earn: it's something we all have.</li>
                <li>• When we protect our dignity, we also protect our self-respect.</li>
                <li>• When we protect others' dignity, we help them feel safe and valued.</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Why is it important?</h4>
              <p className="text-white/90 mb-3">
                Dignity creates trust and belonging.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• It makes people feel proud of who they are.</li>
                <li>• It builds fairness in schools and communities.</li>
                <li>• It helps families support one another with love and care.</li>
                <li>• It encourages kindness, even in difficult moments.</li>
              </ul>
            </div>

            <div className="bg-pomegranate-800/40 rounded-xl p-6">
              <p className="text-white font-medium mb-3">
                <strong>Family Challenge:</strong> Create a "Dignity Pledge" together — each family member promises one way they'll 
                make others feel valued this week. Keep the pledge visible at home or in your Family First Café Docket.
              </p>
              <p className="text-white/90">
                <strong>Family Reflection:</strong> Ask your child: How does it feel when someone makes you feel small? How does it 
                feel when someone makes you feel valued? Discuss why the second is so important.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
};

// Practice Tab Component
const PracticeTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Image at the top */}
        <div className="w-full mb-8">
          <img 
            src="/monthly-themes/respect.png" 
            alt="Mother and daughter bonding"
            className="w-full rounded-xl max-h-96 object-cover"
          />
        </div>

        <Card className="bg-pomegranate-700/40 border border-white/20">
          <CardBody className="p-8 md:p-12">
            {/* Respect Practice */}
            <div className="bg-white/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Respect</h3>
              <div className="text-white/90 space-y-3">
                <h4 className="font-semibold text-white mb-3">How to practice it?</h4>
                <p className="mb-3">Respect is visible in the little things:</p>
                <ul className="space-y-2 ml-4">
                  <li>• At Home: Share, take turns, thank each other.</li>
                  <li>• At School: Listen, encourage, include classmates.</li>
                  <li>• At the Café: Use kind words, greet warmly, clean up after yourself.</li>
                  <li>• Everywhere: Celebrate differences instead of judging them.</li>
                </ul>
                <div className="mt-6 p-4 bg-pomegranate-800/30 rounded-lg">
                  <p>
                    <strong>Family Action:</strong> Try the "Respect Relay" — for one day, each family member passes on respect through one 
                    small action (like holding the door, complimenting someone, or listening closely). Share your stories together 
                    at the end of the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Dignity Practice */}
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Dignity</h3>
              <div className="text-white/90 space-y-3">
                <h4 className="font-semibold text-white mb-3">How to practice it?</h4>
                <p className="mb-3">You show dignity by valuing yourself and others in everyday actions:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Speak with kindness, even when you disagree.</li>
                  <li>• Stand up for others if they are treated unfairly.</li>
                  <li>• Show pride in your culture, identity, and uniqueness.</li>
                  <li>• Offer forgiveness and second chances.</li>
                </ul>
                <div className="mt-6 p-4 bg-pomegranate-800/30 rounded-lg">
                  <p>
                    <strong>Café Action:</strong> Before leaving the café, each family member shares one sentence that begins with: "I will protect 
                    dignity by..."
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
};