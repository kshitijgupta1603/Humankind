pipeline {
    agent any

    environment {
        IMAGE_NAME = 'humankind-app'
        CONTAINER_NAME = 'humankind-container'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/kshitijgupta1603/Humankind.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        bat 'npm install'
                    } else {
                        error 'package.json not found. Please ensure the project is a Node.js project.'
                    }
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        def buildStatus = bat(script: '''
                            set CI=
                            npm run build
                        ''', returnStatus: true)

                        if (buildStatus != 0) {
                            error 'npm run build failed. Please check the build script in package.json.'
                        }
                    } else {
                        error 'package.json not found. Cannot build project.'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                bat """
                    docker stop %CONTAINER_NAME% || echo Not running
                    docker rm %CONTAINER_NAME% || echo Already removed
                """
            }
        }

        stage('Run New Container') {
            steps {
                bat "docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%"
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment completed successfully!'
        }
        failure {
            echo '❌ Build or deployment failed. Check the logs for details.'
        }
    }
}
