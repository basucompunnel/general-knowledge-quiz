# Quiz Questions - Modular Structure

This directory contains all quiz questions organized by category and topic for easy maintenance and AI-assisted expansion.

## 📁 Directory Structure

```
questions/
├── index.ts                          # Main export combining all topics
├── README.md                         # This file
├── history/                          # History category (5 topics, 150 questions)
│   ├── ancient-rome.ts               # 30 questions (Full)
│   ├── world-war-ii.ts               # 30 questions (Full)
│   ├── renaissance.ts                # 30 questions (Full)
│   ├── medieval-europe.ts            # 30 questions (Full)
│   └── cold-war.ts                   # 30 questions (Full)
├── geography/                        # Geography category (5 topics, 50 questions)
│   ├── european-capitals.ts          # 30 questions (Full)
│   ├── world-flags.ts                # 5 questions (Sample)
│   ├── mountains-rivers.ts           # 5 questions (Sample)
│   ├── continents-oceans.ts          # 5 questions (Sample)
│   └── famous-landmarks.ts           # 5 questions (Sample)
├── science/                          # Science category (5 topics, 25 questions)
│   ├── human-body.ts                 # 5 questions (Sample)
│   ├── space-astronomy.ts            # 5 questions (Sample)
│   ├── chemistry-elements.ts         # 5 questions (Sample)
│   ├── physics-forces.ts             # 5 questions (Sample)
│   └── marine-biology.ts             # 5 questions (Sample)
├── arts-literature/                  # Arts & Literature (5 topics, 25 questions)
│   ├── shakespeare.ts                # 5 questions (Sample)
│   ├── classic-novels.ts             # 5 questions (Sample)
│   ├── famous-painters.ts            # 5 questions (Sample)
│   ├── poetry.ts                     # 5 questions (Sample)
│   └── mythology.ts                  # 5 questions (Sample)
├── sports/                           # Sports category (5 topics, 25 questions)
│   ├── olympics.ts                   # 5 questions (Sample)
│   ├── football-soccer.ts            # 5 questions (Sample)
│   ├── basketball.ts                 # 5 questions (Sample)
│   ├── tennis.ts                     # 5 questions (Sample)
│   └── athletics.ts                  # 5 questions (Sample)
├── entertainment/                    # Entertainment (5 topics, 25 questions)
│   ├── hollywood-classics.ts         # 5 questions (Sample)
│   ├── pop-music.ts                  # 5 questions (Sample)
│   ├── tv-shows.ts                   # 5 questions (Sample)
│   ├── rock-bands.ts                 # 5 questions (Sample)
│   └── celebrities.ts                # 5 questions (Sample)
├── technology/                       # Technology (5 topics, 25 questions)
│   ├── computer-history.ts           # 5 questions (Sample)
│   ├── internet-web.ts               # 5 questions (Sample)
│   ├── smartphones.ts                # 5 questions (Sample)
│   ├── famous-inventors.ts           # 5 questions (Sample)
│   └── gaming.ts                     # 5 questions (Sample)
└── nature-animals/                   # Nature & Animals (5 topics, 25 questions)
    ├── african-wildlife.ts           # 5 questions (Sample)
    ├── birds.ts                      # 5 questions (Sample)
    ├── rainforests.ts                # 5 questions (Sample)
    ├── endangered-species.ts         # 5 questions (Sample)
    └── insects.ts                    # 5 questions (Sample)
```

**Total:** 40 topics, 350 questions across 8 categories

## 📝 File Format

Each topic file follows this structure:

```typescript
// {topic-name} Questions
// Current: X questions (Full/Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const topicNameQuestions: QuizQuestion[] = [
  {
    id: "topic-difficulty-1",
    topicId: "topic-id",
    categoryId: "category-id",
    type: "multiple-choice" | "true-false",
    difficulty: "easy" | "medium" | "hard",
    question: "Question text?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"], // Only for multiple-choice
    correctAnswer: 0, // Index (0-3) for MC, 0=false/1=true for T/F
    explanation: "Explanation of the correct answer."
  },
  // ... more questions
] satisfies QuizQuestion[];
```

## 🎯 Question Standards

### **Full Topics** (30 questions total)
- **Easy:** 10 questions (7 multiple-choice + 3 true-false)
- **Medium:** 10 questions (7 multiple-choice + 3 true-false)
- **Hard:** 10 questions (7 multiple-choice + 3 true-false)

### **Sample Topics** (5 questions)
- Approximately 60% multiple-choice, 40% true-false
- Mix of easy (1), medium (2), and hard (1-2) difficulty levels
- Intended to be expanded to full topics

## 🤖 AI-Assisted Question Generation

### **Prompt Template 1: Expand Sample Topic to Full Topic**

```
I need you to expand the {topic-name} quiz questions in lib/data/questions/{category}/{topic-id}.ts from 5 sample questions to a full 30-question topic.

Current state: {X} questions
Target state: 30 questions with this exact distribution:
- Easy (10): 7 multiple-choice + 3 true-false
- Medium (10): 7 multiple-choice + 3 true-false
- Hard (10): 7 multiple-choice + 3 true-false

Requirements:
1. Keep all existing questions (update IDs if needed for sequential numbering)
2. Follow the exact format in the file (check the QuizQuestion type in types/quiz.ts)
3. Ensure questions are factually accurate and educational
4. Provide interesting, informative explanations for each answer
5. For multiple-choice: include 4 plausible options
6. Maintain consistent difficulty progression
7. Use IDs following pattern: {topic-id}-{difficulty}-{1-10}

Topic: {topic displayName from lib/data/topics.ts}
Category: {category name}
Subject focus: {description from topics.ts}

Replace the entire file content with the expanded question set.
```

**Example usage:**
```
I need you to expand the Chemistry & Elements quiz questions in lib/data/questions/science/chemistry-elements.ts from 5 sample questions to a full 30-question topic.

Current state: 5 questions
Target state: 30 questions with exact distribution as above

Topic: Chemistry & Elements
Category: Science
Subject focus: Periodic table and chemical reactions

Replace the entire file content with the expanded question set.
```

### **Prompt Template 2: Add Questions to Existing Difficulty Level**

```
Add {N} more {difficulty} questions to lib/data/questions/{category}/{topic-id}.ts.

Current {difficulty} count: {X}
Target {difficulty} count: {X + N}

Maintain the same format and quality as existing questions. Ensure new question IDs follow sequential numbering ({topic-id}-{difficulty}-{next-number}).
```

### **Prompt Template 3: Improve Question Quality**

```
Review and improve the questions in lib/data/questions/{category}/{topic-id}.ts:

1. Check factual accuracy of all answers
2. Enhance explanations to be more educational and interesting
3. Ensure multiple-choice distractors are plausible but clearly wrong
4. Verify difficulty alignment (easy questions should be accessible, hard questions should require deeper knowledge)
5. Fix any formatting inconsistencies

Maintain the same number of questions and structure. Replace the file if changes are needed.
```

### **Prompt Template 4: Create New Topic File**

```
Create a new quiz topic file for "{new-topic-name}" located at lib/data/questions/{category}/{new-topic-id}.ts.

Topic details:
- Topic ID: {new-topic-id} (must match entry in lib/data/topics.ts)
- Category: {category}  
- Description: {topic description}
- Target: 30 questions (10 easy: 7 MC + 3 TF, 10 medium: 7 MC + 3 TF, 10 hard: 7 MC + 3 TF)

Follow the exact format shown in other topic files, especially:
- Import statement for QuizQuestion type
- Export const with camelCase name: {camelCaseTopicName}Questions
- Use `satisfies QuizQuestion[]` at the end
- Include header comment with current/target question counts

After creating the file, you'll also need to:
1. Add the topic to lib/data/topics.ts if not already present
2. Add the import and spread to lib/data/questions/index.ts
```

## 🔧 Maintenance Tips

### Add a new topic:
1. Create the topic file in the appropriate category folder
2. Add import to `index.ts`
3. Add spread operator to the `questions` array in `index.ts`
4. Ensure topic exists in `lib/data/topics.ts`

### Modify existing questions:
1. Open the specific topic file
2. Edit questions directly
3. Changes are immediately reflected (file is imported by index.ts)

### Verify question count:
```bash
# PowerShell command to count questions in a file
(Get-Content ./science/chemistry-elements.ts | Select-String "^\s+id:" | Measure-Object).Count
```

### Type safety:
All topic files use `satisfies QuizQuestion[]` to ensure compile-time type checking. Run `npm run type-check` or `npx tsc --noEmit` to validate.

##  🚀 Expansion Priority

**High Priority** (5-question sample → 30-question full):
- Science topics: `human-body`, `space-astronomy`, `chemistry-elements`, `physics-forces`, `marine-biology`
- Geography: `world-flags`, `mountains-rivers`, `continents-oceans`, `famous-landmarks`
- Arts & Literature: All 5 topics

**Medium Priority** (enhance existing full topics):
- Add variety to existing 30-question topics
- Improve question quality and explanations

**Future Additions:**
- New topics in underserved categories
- Special event/seasonal topic variations
- Advanced difficulty tiers

## 📊 Current Statistics

| Category | Topics | Questions | % of Total |
|----------|--------|-----------|-----------|
| History | 5 | 150 | 43% |
| Geography | 5 | 50 | 14% |
| Science | 5 | 25 | 7% |
| Arts & Literature | 5 | 25 | 7% |
| Sports | 5 | 25 | 7% |
| Entertainment | 5 | 25 | 7% |
| Technology | 5 | 25 | 7% |
| Nature & Animals | 5 | 25 | 7% |
| **TOTAL** | **40** | **350** | **100%** |

---

**Last Updated:** April 13, 2026  
**Structure Version:** 1.0.0
